import type { Package } from '@/types/package'

// Note that the `composer` property is used as the unique identifier for each package.

export const laravelPackages: Package[] = [
    {
        name: 'Laravel Auditing',
        description: 'Understand changes in Eloquent models.',
        category: 'Database & Eloquent',
        github: 'https://github.com/owen-it/laravel-auditing',
        repo: 'laravel-auditing',
        author: 'owen-it',
        composer: 'owen-it/laravel-auditing',
        stars: 2600,
        keywords: [],
        first_release_at: '2015-08-20 11:48',
        latest_release_at: '2023-03-17 11:39',
    },
    {
        name: 'Laravel Media Library',
        description: 'Associate files with eloquent models.',
        category: 'File Management',
        github: 'https://github.com/spatie/laravel-medialibrary',
        repo: 'laravel-medialibrary',
        author: 'spatie',
        composer: 'spatie/laravel-medialibrary',
        stars: 5100,
        keywords: [],
        first_release_at: '2015-04-22 19:07',
        latest_release_at: '2023-03-06 11:26',
    },
    {
        name: 'Laravel Permissions',
        description: 'Associate users with roles and permissions.',
        category: 'Auth & Permissions',
        github: 'https://github.com/spatie/laravel-permission',
        repo: 'laravel-permission',
        author: 'spatie',
        composer: 'spatie/laravel-permission',
        stars: 11100,
        keywords: [],
        first_release_at: '2015-09-15 15:32',
        latest_release_at: '2023-03-22 02:57',
    },
    {
        name: 'Laravel Debugbar',
        description: 'This is a package to integrate PHP Debug Bar with Laravel.',
        category: 'Debugging & Dev Tools',
        github: 'https://github.com/barryvdh/laravel-debugbar',
        repo: 'laravel-debugbar',
        author: 'barryvdh',
        composer: 'barryvdh/laravel-debugbar',
        stars: 15032,
        keywords: [],
        first_release_at: '2013-09-25 08:11',
        latest_release_at: '2023-02-21 14:21',
    },
    {
        name: 'Laravel Backup',
        description: 'A package to backup your Laravel app.',
        category: 'Dev Ops',
        github: 'https://github.com/spatie/laravel-backup',
        repo: 'laravel-backup',
        author: 'spatie',
        composer: 'spatie/laravel-backup',
        stars: 5189,
        keywords: [],
        first_release_at: '2015-02-18 14:25',
        latest_release_at: '2023-02-03 15:57',
    },
    {
        name: 'Laravel Localization',
        description: 'Easy i18n localization for Laravel, an useful tool to combine with Laravel localization classes.',
        category: 'Localization',
        github: 'https://github.com/mcamara/laravel-localization',
        repo: 'laravel-localization',
        author: 'mcamara',
        composer: 'mcamara/laravel-localization',
        stars: 3107,
        keywords: [],
        first_release_at: '2014-01-19 18:48',
        latest_release_at: '2023-02-18 15:43',
    },
    {
        name: 'Laravel GraphQL',
        description: 'Laravel wrapper for Facebook\'s GraphQL',
        category: 'API',
        github: 'https://github.com/rebing/graphql-laravel',
        repo: 'graphql-laravel',
        author: 'rebing',
        composer: 'rebing/graphql-laravel',
        stars: 1954,
        keywords: [],
        first_release_at: '2017-03-27 09:42',
        latest_release_at: '2023-03-05 15:42',
    },
    {
        name: 'Laravel SEO',
        description: 'A package to handle the SEO in any Laravel application, big or small.',
        category: 'SEO',
        github: 'https://github.com/ralphjsmit/laravel-seo',
        repo: 'laravel-seo',
        author: 'ralphjsmit',
        composer: 'ralphjsmit/laravel-seo',
        stars: 316,
        keywords: [],
        first_release_at: '2022-02-08 13:02',
        latest_release_at: '2023-02-17 17:52',
    },
    {
        name: 'Pest',
        description: 'An elegant PHP testing Framework with a focus on simplicity.',
        category: 'Testing',
        github: 'https://github.com/pestphp/pest',
        repo: 'pest',
        author: 'pestphp',
        composer: 'pestphp/pest',
        stars: 6635,
        keywords: [],
        first_release_at: '2020-05-11 16:47',
        latest_release_at: '2023-03-24 11:26',
    },
    {
        name: 'Laravel Cashier',
        description: 'An expressive, fluent interface to Stripe\'s subscription billing services.',
        category: 'Payment',
        github: 'https://github.com/laravel/cashier-stripe',
        repo: 'cashier-stripe',
        author: 'laravel',
        composer: 'laravel/cashier',
        stars: 2209,
        keywords: [],
        first_release_at: '2014-03-04 03:17',
        latest_release_at: '2023-03-02 16:11',
    },
    {
        name: 'Laravel Honeypot',
        description: 'Preventing spam submitted through forms.',
        category: 'Security',
        github: 'https://github.com/spatie/laravel-honeypot',
        repo: 'laravel-honeypot',
        author: 'spatie',
        composer: 'spatie/laravel-honeypot',
        stars: 1196,
        keywords: [],
        first_release_at: '2018-12-27 09:06',
        latest_release_at: '2023-01-17 07:09',
    },
    {
        name: 'Laravel Mail Preview',
        description: 'A mail driver to quickly preview mail.',
        category: 'Mail',
        github: 'https://github.com/spatie/laravel-mail-preview',
        repo: 'laravel-mail-preview',
        author: 'spatie',
        composer: 'spatie/laravel-mail-preview',
        stars: 1104,
        keywords: [],
        first_release_at: '2016-03-13 21:49',
        latest_release_at: '2023-01-25 15:10',
    },
    {
        name: 'Aimeos',
        description: 'Ultra fast online shops, scalable marketplaces, complex B2B applications and Gigacommerce.',
        category: 'E-Commerce',
        github: 'https://github.com/aimeos/aimeos-laravel',
        repo: 'aimeos-laravel',
        author: 'aimeos',
        composer: 'aimeos/aimeos-laravel',
        stars: 6086,
        keywords: [],
        first_release_at: '2015-04-27 13:32',
        latest_release_at: '2023-02-16 09:59',
    },
    {
        name: 'Filament',
        description: 'Admin panel, form builder and table builder for Laravel. Built with the TALL stack. Designed for humans.',
        category: 'CMS & Admin Panels',
        github: 'https://github.com/filamentphp/filament',
        repo: 'filament',
        author: 'filamentphp',
        composer: 'filament/filament',
        stars: 6170,
        keywords: [],
        first_release_at: '2020-10-10 23:03',
        latest_release_at: '2023-03-25 17:36',
    },
    {
        name: 'Laravel Actions',
        description: 'Organising the logic of your Laravel applications by focusing on the actions your applications provide.',
        category: 'Code Architecture',
        github: 'https://github.com/lorisleiva/laravel-actions',
        repo: 'laravel-actions',
        author: 'lorisleiva',
        composer: 'lorisleiva/laravel-actions',
        stars: 2022,
        keywords: [],
        first_release_at: '2019-05-19 19:17',
        latest_release_at: '2023-02-22 10:37',
    },
    {
        name: 'Flash',
        description: 'Offers a Twitter Bootstrap optimized flash messaging setup',
        category: 'Notifications',
        github: 'https://github.com/laracasts/flash',
        repo: 'flash',
        author: 'laracasts',
        composer: 'laracasts/flash',
        stars: 2602,
        keywords: [],
        first_release_at: '2014-06-30 05:09',
        latest_release_at: '2023-01-30 20:31',
    },
    {
        name: 'Blade Icons',
        description: 'Easily make use of SVG icons in your Laravel Blade views.',
        category: 'UI & Blade Components',
        github: 'https://github.com/blade-ui-kit/blade-icons',
        repo: 'blade-icons',
        author: 'blade-ui-kit',
        composer: 'blade-ui-kit/blade-icons',
        stars: 1769,
        keywords: [],
        first_release_at: '2016-09-05 14:37',
        latest_release_at: '2023-02-15 16:30',
    },
    {
        name: 'Laravel Tags',
        description: 'Add tags and taggable behaviour to your Laravel app.',
        category: 'Utilities & Helpers',
        github: 'https://github.com/spatie/laravel-tags',
        repo: 'laravel-tags',
        author: 'spatie',
        composer: 'spatie/laravel-tags',
        stars: 1397,
        keywords: [],
        first_release_at: '2016-10-23 14:00',
        latest_release_at: '2023-01-25 09:12',
    },
]