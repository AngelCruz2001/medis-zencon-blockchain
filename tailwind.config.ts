import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        boxShadow: {
          light: "0 0 10px 0 #DCEDEB",
        }
    },
  },
  darkMode: 'class',
  plugins: [nextui({
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            background: "#F7FFFD", 
            foreground: "#FFFFFF",
            primary: {
              DEFAULT: "#00CCBA",
              100: "#C9FCE5",
              200: "#95F9D5",
              300: "#5FEFC8",
              400: "#38E0C2",
              500: "#00CCBA",
              600: "#00AEAF",
              700:"#008592",
              800: "#006076",
              900: "#004661"
            }
          }
        },
        dark: {
          colors: {
            // background: "#", 
            primary: {
              DEFAULT: "#00CCBA",
              100: "#C9FCE5",
              200: "#95F9D5",
              300: "#5FEFC8",
              400: "#38E0C2",
              500: "#00CCBA",
              600: "#00AEAF",
              700:"#008592",
              800: "#006076",
              900: "#004661"
            }
          }
        }
      }
    })],
}
export default config
