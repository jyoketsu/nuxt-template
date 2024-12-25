import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default <Partial<Config>>{
  plugins: [typography()],
  theme: {
    extend: {
      colors: {
        "custom-green": {
          50: "#E7F7F1", // 非常浅
          100: "#CFEFE3", // 非常浅
          200: "#A4E1C9", // 浅
          300: "#6FCBA8", // 比较浅
          400: "#3FAE88", // 略浅
          500: "#24936E", // 主色
          600: "#1F7F5F", // 比较深
          700: "#19694F", // 深
          800: "#145443", // 很深
          900: "#0F4036", // 非常深
          950: "#092922", // 极深
        },
        "custom-blue": {
          50: "#E7F2FB", // 非常浅
          100: "#D0E5F7", // 非常浅
          200: "#A2CBEE", // 浅
          300: "#6AA8DD", // 比较浅
          400: "#3A85C6", // 略浅
          500: "#005CAF", // 主色
          600: "#004E95", // 比较深
          700: "#003D75", // 深
          800: "#002E59", // 很深
          900: "#002142", // 非常深
          950: "#00142A", // 极深
        },
        "custom-red": {
          50: "#FBEAEA", // 非常浅
          100: "#F6D4D4", // 非常浅
          200: "#EDA5A4", // 浅
          300: "#E37372", // 比较浅
          400: "#D44F4C", // 略浅
          500: "#AB3B3A", // 主色
          600: "#903231", // 比较深
          700: "#742827", // 深
          800: "#5A1F1E", // 很深
          900: "#421817", // 非常深
          950: "#2A0E0E", // 极深
        },
        "custom-gray": "#6D7D93",
      },
      boxShadow: {
        custom: "0px 0px 196px 0px rgba(4,122,255,0.3)",
      },
    },
  },
};
