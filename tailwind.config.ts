import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        backgroundMain: "url('/bg__main_app.png')",
      },
      colors: {
        purple: '#9747FF',
        purpleLight: '#C7D1F4',
        lime: '#DBF9B3',
      },
    },
  },
  plugins: [],
};
export default config;
