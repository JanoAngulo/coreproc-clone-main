/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				"yellow": "#FBB905",
				"blue": "#658FFF",
				"white": "#FFFFFF",
				"gray-100": "#F2F2F2",
				"gray-200": "#939AA0",
				"gray-300": "#858585",
				"darkblue-100": "#465361",
				"darkblue-200": "#39454E",
				"darkblue-300": "#3A464D",
				"black": "#000000"
			},
		fontFamily: {
			Lato: ["Lato"],
			GilroyHeavy: ["GilroyHeavy"],
		}
		}
	},
	plugins: []
};
