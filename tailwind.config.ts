import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: '#477167',

                    secondary: '#ac6c56',

                    accent: '#708573',

                    neutral: '#c37f57',

                    'base-100': '#3b4b3f',

                    info: '#994b35',

                    success: '#d2bb9c',

                    warning: '#7ea297',

                    error: '#F87272',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
};
export default config;
