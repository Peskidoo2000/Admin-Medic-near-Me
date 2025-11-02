import type {Config} from "tailwindcss";
const config:Config={
    content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
],
    theme:{
        extend:{
            screens:{
                sm:"480px",
                md:"768px",
                lg:"976px",
                xl:"1440px",
            },
            colors:{
                
            },
            fontWeight: {
                thin: "100",
                extralight: "200",
                light: "300",
                normal: "400",
                medium: "500",
                semibold: "600",
                bold: "700",
                extrabold: "800",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                sans: ["Inter", "sans-serif"],
            },

        }
    }
}

export default config;