/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./app/**/*.{js,ts,jsx,tsx}",
	  "./pages/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		fontFamily: {
			italianno: ['Italianno', 'cursive'],
		  },
		colors: {
		  bg: "#0f172a",
		  fg: "#e2e8f0",
		  accent: "#38bdf8",
		},
	  },
	},
	plugins: [],
  };