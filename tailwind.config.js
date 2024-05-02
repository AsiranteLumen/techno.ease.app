/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: {
          "100": "#ececec",
          "200": "rgba(246, 241, 241, 0.19)",
          "300": "rgba(236, 236, 236, 0.75)",
        },
        brown: "#952323",
        palegoldenrod: {
          "100": "#ffe6a4",
          "200": "rgba(255, 230, 164, 0.75)",
          "300": "rgba(255, 230, 164, 0.5)",
          "400": "rgba(255, 230, 164, 0.6)",
          "500": "rgba(255, 229, 164, 0)",
        },
        wheat: "#dad4b5",
        firebrick: {
          "100": "#a82d1b",
          "200": "#c30a0a",
        },
        black: "#000",
        burlywood: {
          "100": "#e6cc8a",
          "200": "rgba(230, 204, 138, 0.5)",
        },
        darkslategray: {
          "100": "#36454f",
          "200": "#333",
        },
        indianred: "#cf5442",
        blanchedalmond: "#f2e8c6",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(219, 217, 217, 0.19)",
        },
        mintcream: "#f3f8f4",
        mediumseagreen: "#2fb554",
        sienna: "#a65d50",
        gray: "rgba(255, 255, 255, 0)",
      },
      spacing: {},
      fontFamily: {
        oswald: "Oswald",
        montserrat: "Montserrat",
        nunito: "Nunito",
      },
      borderRadius: {
        "81xl": "100px",
        xl: "20px",
        "11xl-5": "30.5px",
        "10xs": "3px",
        "41xl": "60px",
        "44xl-5": "63.5px",
        "3xs": "10px",
        "31xl": "50px",
      },
    },
    fontSize: {
      "21xl": "40px",
      "39xl": "58px",
      "17xl": "36px",
      "29xl": "48px",
      "41xl": "60px",
      "77xl": "96px",
      xl: "20px",
      base: "16px",
      "9xl": "28px",
      "3xl": "22px",
      "8xl": "27px",
      "6xl": "25px",
      "10xl": "29px",
      "19xl": "38px",
      "5xl": "24px",
      lgi: "19px",
      "13xl": "32px",
      "7xl": "26px",
      "26xl": "45px",
      sm: "14px",
      "11xl": "30px",
      lg: "18px",
      mini: "15px",
      mid: "17px",
      inherit: "inherit",
    },
    screens: {
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
