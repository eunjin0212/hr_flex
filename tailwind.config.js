module.exports = {
    mode: 'jit',
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
                gray: {
                    '01': '#FCFCFD',
                    '02': '#F3F3F3',
                    '03': '#F0F0F0',
                    '04': '#DADADA',
                    '05': '#D0D5DD',
                    '06': '#D3D4D5',
                    '07': '#D6DDEB',
                    '08': '#A6A6A6',
                    '09': '#84818A',
                    '10': '#717171',
                    '11': '#504F54',
                    '12': '#404040',
                    '13': '#2E2C34',
                },

                main: {
                    dark: '#4640DE',
                    light: '#4031B8'
                },

                navy: {
                    '01': '#EAEDF7',
                    '04': '#25324B',
                    '05': '#1C295A09',
                    '06': '#1018280D',
                }
            },
            fontFamily: {
                manrope: ["Manrope", "sans-serif"],
                epilogue: ["Epilogue", "sans-serif"],
            },
            screens: {
                'xs': '390px',
                'sm': '768px', // mobile
                'md': '1024px', // tablet
            },
            minWidth: {
                'xs': '280px', // min mobile
                'md': '1024px', // tablet
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ]
}
