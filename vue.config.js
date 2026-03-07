/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const publicPath = '/';

const plugins = [];
if (process.env.PRERENDER === 'true') {
  plugins.push(
    new PrerenderSpaPlugin({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/', '/terminal'],
    }),
  );
}

module.exports = {
  publicPath,
  configureWebpack: {
    plugins,
  },
};
