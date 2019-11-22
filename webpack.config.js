const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, { mode } = { mode: "production" }) => {
  const isOnDevelop = mode !== 'production';
  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          include: [
            path.resolve(__dirname, 'src/'),
          ],
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          include: [
            path.resolve(__dirname, 'src/'),
          ],
          use: [
            isOnDevelop ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader'
          ],
        }
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: 'index.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      // new BundleAnalyzerPlugin(),
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    devServer: {
      historyApiFallback: true,
    },
  }
};