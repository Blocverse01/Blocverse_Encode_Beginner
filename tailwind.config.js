module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          main: "#F8F6F6",
          dark: "#171105",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
