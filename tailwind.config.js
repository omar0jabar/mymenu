module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`
  ],
  theme: {

    extend: {
      colors: ({
        colors
      }) => ({
        "primary": "var(--primary-color)",
        "color_placeholder":"#999999"
      }),

      screens: {
        // sm: '640px',
        // md: '768px',
        // lg: '1024px',
        // xl: '1620px',
        // // '2xl': '1936px',

        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1620px',
      },

      spacing: {

      },
      fontFamily: {
        'roboto': ['Roboto', 'sans'],
        'solway': ['Solway', 'serif'],
      },
      fontSize: {

      },
    },
  },
  plugins: [],
}
