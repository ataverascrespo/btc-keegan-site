/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
			  text: 'text 15s ease infinite',
			},
			keyframes: {
			  text: {
				'0%, 100%': {
				  'background-size': '200% 200%',
				  'background-position': 'left center',
				},
				'50%': {
				  'background-size': '200% 200%',
				  'background-position': 'right center',
				},
			  },
			},
		  }
		},
	plugins: [],
}
