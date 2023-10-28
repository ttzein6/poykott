<script setup>
const siteName = 'حملة مقاطعة'
const siteTitle = 'حملة مقاطعة منتجات الاحتلال'
const siteDescription = 'قائمة ببدائل منتجات الاحتلال لمقاطعتها.'
// const ogImageUrl = 'https://laravel-package-ocean.com/laravel-package-ocean-opengraph.webp'
// const twitterHandle = '@HassanZahirnia'
// const siteUrl = 'https://laravel-package-ocean.com'
const ogImageUrl = ''
const twitterHandle = ''
const siteUrl = ''

useServerSeoMeta({
    title: siteTitle,
    description: siteDescription,
    // Opengraph
    ogSiteName: siteName,
    ogType: 'website',
    ogTitle: siteTitle,
    ogDescription: siteDescription,
    ogImage: ogImageUrl,
    ogLocale: 'ar',
    ogUrl: siteUrl,
    // Twitter
    twitterCard: 'summary_large_image',
    twitterImage: ogImageUrl,
    twitterSite: twitterHandle,
    twitterCreator: twitterHandle,
    twitterTitle: siteTitle,
    twitterDescription: siteDescription,
})
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
