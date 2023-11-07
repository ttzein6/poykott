import json, glob, os

################################
# Define Functions
################################


def read_json_file(file_path: str) -> dict:
    """
    read the content of json file, and return its content
    :param file_path: the path of the json file.
    :returns: dictionary of the json data.
    """
    with open(file_path) as fr:
        return json.load(fr)


def write_json_file(file_path: str, data: dict) -> None:
    """
    writes the given dictionary to a json file
    :param file_path: the path of the json file
    :param data: the data that will be dumped to json file.
    """
    with open(file_path, "w") as fw:
        return json.dump(data, fw, indent=4, ensure_ascii=False)


def convert_json_to_csv(file_path: str) -> str:
    """
    Function to read json file and send the data to the conversion function, then write the CSV in file
    :param file_path: the path of the json file
    :return: a string message denoting the completion of converting
    """
    json_data = read_json_file(file_path=f"{file_path}.json")
    from json2csv import json_2_csv

    csv = json_2_csv(json_data=json_data)
    with open(f"./automated/{file_path}.csv", "w", encoding="utf-16") as csv_file:
        csv_file.write(csv)
    print("Completed converting json to csv.")


def convert_csv_to_excel(csv_file_path: str) -> str:
    """
    Convert the generated csv from the previous function to Excel file
    :param csv_file_path: the path of the csv file
    :param excel_file_path: the path of the Excel file
    :return: a message denoting the completion of conversion.
    """
    from csv2xlsx import csv_to_excel

    csv_to_excel(csv_file_path=csv_file_path)
    print("Completed converting csv to excel.")


def convert_json_to_sql(file_path: str) -> str:
    from json2sql import json_2_sql

    json_file = read_json_file(file_path=f"{file_path}.json")
    sql = json_2_sql(json_data=json_file, sqlite=True)
    with open(f"./automated/{file_path}-sqlite.sql", "w", encoding="utf-16") as file:
        file.write(sql)
    print("Completed converting json to sqlite format.")
    ############################################################################
    # if you want to write the sql script to sqlite db, uncomment the next block
    try:
        import sqlite3

        connection = sqlite3.connect(f"automated/{file_path}.db")
        connection.executescript(sql)
        print("wrote the sql to sqlite db successfully.")
    except Exception as e:
        print(f"error writing data: {e}")
        connection.commit()
    finally:
        connection.close()
    ############################################################################
    sql = json_2_sql(json_data=json_file, sqlite=False)
    with open(f"./automated/{file_path}-mysql.sql", "w", encoding="utf-16") as file:
        file.write(sql)
    print("Completed converting json to mysql format.")


def convert_json_to_xml(file_path: str) -> str:
    """
    Convert json or dictionary to xml and write it to a file
    :returns message donating the completion of conversion
    """
    from json2xml import xMl, json_2_xml

    json_data = read_json_file(file_path=f"{file_path}.json")
    root = xMl.Element("Palestine")
    root = json_2_xml(root=root, json_data=json_data)
    xMl.indent(root)
    xMl.ElementTree(root).write(f"./automated/{file_path}.xml", encoding="utf-16")
    print("Completed converting json to xml.")


def convert_json_to_yaml(file_path: str) -> str:
    """
    Function to read json file and send the data to the conversion function, then write the YAML in file
    :param file_path: the path of the json file
    :return: a string message denoting the completion of converting
    """
    from json2yaml import json_2_yaml

    json_data = read_json_file(file_path=f"{file_path}.json")
    yaml = json_2_yaml(json_data=json_data)
    with open(f"./automated/{file_path}.yml", "w", encoding="utf-16") as yaml_file:
        yaml_file.write(yaml)
    print("Completed converting json to yaml.")


################################
# Using Functions
################################
try:
    os.mkdir("automated")
except FileExistsError:
    ...

for json_file in glob.glob("*.json"):
    file: str = json_file.split(".")[0]
    convert_json_to_xml(file_path=file)
    convert_json_to_yaml(file_path=file)
    convert_json_to_csv(file_path=file)
    convert_csv_to_excel(csv_file_path=f"./automated/{file}")
    convert_json_to_sql(file_path=file)
