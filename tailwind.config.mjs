/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    	extend: {
    		animation: {
    			flip: 'flip 6s infinite steps(2, end)',
    			rotate: 'rotate 3s linear infinite both'
    		},
    		keyframes: {
    			flip: {
    				to: {
    					transform: 'rotate(360deg)'
    				}
    			},
    			rotate: {
    				to: {
    					transform: 'rotate(90deg)'
    				}
    			}
    		},
    		colors: {
    			background: 'var(--background)',
    			foreground: 'var(--foreground)'
    		},
    		fontFamily: {
    			lilitaOne: [
    				'var(--font-lilita-one)'
    			]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
};
