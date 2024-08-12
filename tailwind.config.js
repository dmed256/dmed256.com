const plugin = require('tailwindcss/plugin');
const tailwindTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      mono: [
        'monaco, Consolas, "Lucida Console", monospace',
        ...tailwindTheme.fontFamily.mono,
      ],
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'fixed-size': (value) => ({
            minWidth: value,
            maxWidth: value,
            minHeight: value,
            maxHeight: value,
          }),
        },
        { values: theme('width') }
      );
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'fixed-w': (value) => ({
            minWidth: value,
            maxWidth: value,
          }),
        },
        { values: theme('width') }
      );
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'fixed-h': (value) => ({
            minHeight: value,
            maxHeight: value,
          }),
        },
        { values: theme('height') }
      );
    }),
  ],
};
