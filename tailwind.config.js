/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#dc2626",
          secondary: "#7c3aed",
          accent: "#f97316",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#22c55e",
          warning: "#FBBD23",
          error: "#f87171",
        },
      },
      "dark",
    ],
  },
  plugins: [require("daisyui")],
};
