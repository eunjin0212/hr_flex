

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
            spacing: {
                '0.5': '0.125rem', // 2px
                '1.5': '0.375rem', // 6px
                '2.5': '0.625rem', // 10px
                '3.5': '0.875rem', // 14px
                '4.5': '1.125rem', // 18px
                '5.5': '1.375rem', // 22px
                '6.5': '1.625rem', // 26px
                '7.5': '1.875rem', // 30px
            },
            colors: {
                'top-menu-blue': '#29AAE3',
                'primary': {
                    100: '#EDE6FF',
                    200: '#DBD0FF',
                    300: '#C5B3FF',
                    400: '#AB92FD',
                    500: '#9272FA',
                    600: '#764DFB',
                    700: '#602FFF'
                },
                'gray': {
                    '01': '#FAFAFA',
                    '02': '#F5F5F5',
                    '03': '#F6F6F6',
                    '04': '#F9F9F9',
                    '05': '#E7E7E7',
                    '06': '#B0B0B0',
                    '07': '#888888',
                    '08': '#6D6D6D',
                    '09': '#4F4F4F',
                    '10': '#3D3D3D',
                },
                blue: {
                    '01': '#F0FAFF',
                    '02': '#E0F4FE',
                    '03': '#B9EAFE',
                    '04': '#0CB3EB',
                    '05': '#0091C9',
                    '06': '#2EC7FA',
                },
                navy: {
                    '01': '#07334A',
                },
                green: {
                    '01': '#1BD338',
                    '02': '#68C200'
                },
                'error': '#F04550',
                orange: {
                    '01': '#F3742D'
                },
            },
            fontFamily: {
                inter: ["inter", "sans-serif"],
                nanum: ["NanumSquareRound", "sans-serif"],
            },
            screens: {
                'xs': '390px',
                'sm': '768px', // mobile
                'md': '1024px', // tablet
            },
            minWidth: {
                'xs': '280px', // min mobile
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ]
}
