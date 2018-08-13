module.exports = {
    title: 'Vue Simple Pagination',
    description: 'Simple, generic and non-intrusive pagination component for Vue.js',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Documentation', link: '/guide/installation' },

        ],
        sidebar: {
            '/guide/' : [
                {
                    collapsable: false,
                    children: [
                        'installation',
                        'props',
                        'slots',
                        'events',
                        'examples'
                    ]
                }
            ]
        },
        repo: 'PavelShar/vue-simple-pagination',
    }
}
