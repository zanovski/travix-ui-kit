module.exports = {
  title: 'Travix styleguide',
  assetsDir: 'dist',
  template: './styleguide.html',
  components: 'components/**/*.js',
  skipComponentsWithoutExample: true,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js?$/,
          // we need to transpile `buble` (react-styleguide dependency) package also
          // because it contains ES6 syntax which breaks the website on IE11.
          // https://github.com/styleguidist/react-styleguidist/issues/764
          exclude: /node_modules\/(?!buble)/,
          use: 'babel-loader',
        },
      ],
    },
  },
};
