import {fontFamily} from 'tailwindcss/defaultTheme';
import tailwindcssAnimate from 'tailwindcss-animate';
import {skeleton} from '@skeletonlabs/tw-plugin';


/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: ['class'],
    content: [
        './src/**/*.{html,js,svelte,ts}',
        require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
    ],
    theme: {
        screens: {
            'xs': '200px',
            'sm': '320px',
            'md': '768px',
            'lg': '1024px'
        },
        container: {
            center: true,
            padding: '2rem',
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            fontFamily: {
                sans: [...fontFamily.sans],
                levin: ['GveretLevinAlefAlefAlef'],
                arimo: ['Arimo']
            }
        }
    },
    plugins: [
        tailwindcssAnimate,
        skeleton({
            themes: {
                preset: [
                    'skeleton',
                    'modern',
                    'crimson',
                    'rocket',
                    'sahara',
                    'wintry',
                    'vintage',
                    'seafoam',
                    'gold-nouveau',
                    'hamlindigo',
                ]
            }
        })
    ]
};

export default config;
