/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter"],
      },
      backgroundImage: {
        'banner-bg': "url('./teambg.jpg')",
    }
    },
    plugins: [("daisyui")],
  },
};

