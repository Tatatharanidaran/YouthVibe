import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./utils/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        aurora: "#4F5FD7",
        coral: "#7E879C",
        mist: "#9AA3B5",
        panel: "rgba(19, 24, 35, 0.84)"
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 10px 26px rgba(79, 95, 215, 0.14)",
        panel: "0 10px 28px rgba(7, 12, 22, 0.14)",
        floating: "0 14px 34px rgba(7, 12, 22, 0.18)"
      },
      backgroundImage: {
        mesh:
          "radial-gradient(circle at top left, rgba(79, 95, 215, 0.1), transparent 30%), radial-gradient(circle at 80% 18%, rgba(154, 163, 181, 0.08), transparent 24%)"
      }
    }
  },
  plugins: []
};

export default config;
