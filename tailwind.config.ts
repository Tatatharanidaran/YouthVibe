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
        ink: "#070B16",
        aurora: "#4CF2D2",
        coral: "#FF7A59",
        mist: "#95A4C6",
        panel: "rgba(13, 18, 38, 0.72)"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 20px 80px rgba(76, 242, 210, 0.18)",
        panel: "0 24px 60px rgba(5, 10, 24, 0.45)",
        floating: "0 28px 90px rgba(4, 9, 24, 0.55)"
      },
      backgroundImage: {
        mesh:
          "radial-gradient(circle at top left, rgba(76, 242, 210, 0.22), transparent 30%), radial-gradient(circle at 85% 20%, rgba(255, 122, 89, 0.18), transparent 24%), radial-gradient(circle at 50% 80%, rgba(114, 93, 255, 0.14), transparent 28%)"
      }
    }
  },
  plugins: []
};

export default config;
