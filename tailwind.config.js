

module.exports = {
    content: [
    "/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        container: {},
        extend: {
            transitionProperty: {
                'height': 'height',
                'spacing': 'margin, padding',
            },
            colors : {
                'top-menu-blue' : '#29AAE3',
                'primary' :{
                    100: '#EDE6FF',
                    200: '#DBD0FF',
                    300: '#C5B3FF',
                    400: '#AB92FD',
                    500: '#9272FA',
                    600: '#764DFB',
                    700: '#602FFF'
                },
                'gray' :{
                    100: '#E9E9E9',
                    200: '#D0D0D0',
                    500: '#898989',
                    600: '#666666',
                    700: '#454546'
                }
            },
            fontFamily: {
                inter: ["inter", "sans-serif"],
                nanum: ["NanumSquareRound", "sans-serif"],
            },
        },
        screens: {
            'lucky' : '600px',
            'sm' : '640px',
            'md' : '768px',
            'lg' : '1024px',
            'xl' : '1280px',
            '2xl' : '1536px',
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ]
}
