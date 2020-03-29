const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const publicPath = process.env.NODE_ENV === 'production'
  ? '/www.bell-towne.com/'
  : '/';

module.exports = {
  publicPath,
  configureWebpack: {
    plugins: [
      new PrerenderSpaPlugin({
        // Absolute path to compiled SPA
        staticDir: path.join(__dirname, 'dist'),
        // List of routes to prerender
        routes: ['/', '/about'],
      }),
    ],
  },
};
