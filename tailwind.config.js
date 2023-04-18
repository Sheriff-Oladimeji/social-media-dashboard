/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      Toggle: "hsl(210, 78%, 56%)",
      ToggleTwo: "hsl(146, 68%, 55%)",
      lightToggle: "hsl(230, 22%, 74%)",
      VeryDarkBlueBG: "hsl(230, 17%, 14%)",
      VeryDarkBlueTopBG: "hsl(232, 19%, 15%)",
      DarkDesaturatedBlueCardBG: "hsl(228, 28%, 20%)",
      DesaturatedBlueText: "hsl(228, 34%, 66%)",
      White: "hsl(0, 0%, 100%)",
      WhiteBG: "hsl(0, 0%, 100%)",
      VeryPaleBlueTopBG: "hsl(225, 100%, 98%)",
      LightGrayishBlueCardBG: "hsl(227, 47%, 96%)",
      DarkGrayishBlueText: "hsl(228, 12%, 44%)",
      VeryDarkBlueText: "hsl(230, 17%, 14%)",
      LimeGreen: "hsl(163, 72%, 41%)",
      BrightRed: "hsl(356, 69%, 56%)",
      Facebook: "hsl(208, 92%, 53%)",
      Twitter: "hsl(203, 89%, 53%)",
      Instagram: "hsl(37, 97%, 70%)",
      iInstagramTwo: "hsl(329, 70%, 58%)",
      YouTube: "hsl(348, 97%, 39%)",
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
