/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				mb: "420px",
				smb: "360px",
			},
		},
	},
	plugins: [],
}
