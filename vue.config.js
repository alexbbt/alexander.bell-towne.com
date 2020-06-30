/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const publicPath = '/';

module.exports = {
  publicPath,
  configureWebpack: {
    plugins: [
      new PrerenderSpaPlugin({
        // Absolute path to compiled SPA
        staticDir: path.join(__dirname, 'dist'),
        // List of routes to prerender
        routes: ['/', '/terminal'],
      }),
    ],
  },
};
