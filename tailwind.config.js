module.exports = {
  mode: 'jit',
  purge: [
    './assets/**/*.scss',
    './components/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.ts',
    './*.{vue,ts}',
    './nuxt.config.ts'
  ],
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
