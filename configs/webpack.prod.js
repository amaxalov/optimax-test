const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [new BundleAnalyzerPlugin()],
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserWebpackPlugin()]
  },
});
