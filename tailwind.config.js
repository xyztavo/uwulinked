import {heroui} from "@heroui/theme"
import config from './config'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 25px rgba(252, 154, 238, 0.2), inset 0 0 1px rgba(127, 127, 127, 0.5)',
      },
    },
  },
  darkMode: "class",
  plugins: [ heroui({
    themes: {
      light: {
        // ...
        colors: {
          primary: config.accentColor
        },
      },
      dark: {
        // ...
        colors: {
          primary: config.accentColor
        },
      },
    },
  }),],
}
