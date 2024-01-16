/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1080px",
			xl: "1200px",
		},
		extend: {
			colors: {
				"blue-light-50": "#F0F9FF",
				"blue-light-100": "#E0F2FE",
				"blue-light-500": "#0BA5EC",
				"blue-light-700": "#026AA2",
				"gray-25": "#FCFCFD",
				"gray-100": "#F2F4F7",
				"gray-100": "#EAECF0",
				"gray-300": "#D0D5DD",
				"gray-500": "#667085",
				"gray-600": "#475467",
				"gray-700": "#344054",
				"gray-900": "#101828",
			},
			backgroundImage: {
				"gray-gradient-100":
					"linear-gradient(45deg, #1D2939 0%, #475467 100%)",
				"gray-gradient-200":
					"linear-gradient(90deg, #475467 0%, #667085 100%)",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				inspiration: ["Inspiration", "cursive"],
			},
		},
	},
	plugins: [],
};
