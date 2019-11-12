const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isOnDevelopment = argv.mode === 'development';
  console.log(argv.mode);
  return {
    // entry file
    entry: {
      'one': './src/js/1.js',
      'two': './src/js/2.js',
      'three': './src/js/3.js',
    },
    // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
    output: {
      path: path.resolve(__dirname, isOnDevelopment ? 'dist/dev' : 'dist/production'),
      filename: isOnDevelopment ? '[name].bundle.js' : '[name].[chunkhash].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, 'src/'),
          ],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.html$/,
          use: {
            loader: "html-loader",
          },
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader'
          ]
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: '[name].css',
        chunkFilename: '[id].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),
      new HtmlWebpackPlugin({
        filename: '1.html',
        template: 'src/html/1.html',
        chunks: ['one', 'vendor', '[id].css']
      }),
      new HtmlWebpackPlugin({
        filename: '2.html',
        template: 'src/html/2.html',
        chunks: ['two', 'vendor', '[id].css']
      }),
      new HtmlWebpackPlugin({
        filename: '3.html',
        template: 'src/html/3.html',
        chunks: ['three', 'vendor', '[id].css']
      })
    ],
    devtool: 'source-map',
    mode: 'development',
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            filename: isOnDevelopment ? '[name].bundle.js' : '[name].[chunkhash].bundle.js',
            test: /node_modules/,
            chunks: "initial",
            name: "vendor",
            // enforce: true,
          },
        },
      },
    },
  }
};