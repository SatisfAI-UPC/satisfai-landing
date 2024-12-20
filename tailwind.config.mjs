/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/flowbite/**/*.js"
	],
	theme: {
		extend: {
			colors: {
				'primary': '#55D6B0',
				'primary-light': '#AAEBD8',
				'secondary': '#FABC3F',
				'secondary-light': '#FFDBB5',
				'tertiary': '#05467E',
				'tertiary-light': '#ADCFEB',
				'black': '#313131',
				'grey': '#6C6C72',
				'cream': '#F7F7F7'
			},
			animation: {
				'bounce-slow': 'bounce ease 3s infinite',
			},
			keyframes: {
				'hover-shrink': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(0.9)' },
					'100%': { transform: 'scale(1)' },
				},
				'bounce-slow': {
					'0%': { transform: 'translateY(0%)' },
					'50%': { transform: 'translateY(-5%)' },
					'100%': { transform: 'translateY(0%)' },
				}
			},
			scrollBehavior: ['smooth'],
		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				'.select-none': {
					'user-select': 'none',
					'-moz-user-select': 'none',
					'-webkit-user-select': 'none',
					'-ms-user-select': 'none',
					'pointer-events': 'none',
					'user-drag': 'none',
				}
			}
			addUtilities(newUtilities)
		},
		require('flowbite/plugin'),
	],
}
