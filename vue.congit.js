// vue.config.js
module.exports = {
  loaderOptions: {
    css: {
      localIdentName: '[name]-[hash]',
      camelCase: 'only'
    }
  }
}