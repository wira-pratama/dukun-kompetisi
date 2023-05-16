export default defineNuxtConfig({
    ssr: false,
    css: ['~/assets/css/main.css'],
    vite: {
        define: {
          "process.env.TESS_ENV": { PORT: "3000", },
        },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            title: 'Website title',
            htmlAttrs: {
                lang: 'en'
            },
            charset: 'utf-16',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Dukun Lomba' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/placeholder.ico' },
            ]
        }
    },
})
