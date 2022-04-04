const HWP = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, '/client/index.tsx'),
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'],
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HWP({
      title: 'Development',
      template: path.join(__dirname, './index.html'),
    }),
  ],
  devServer: {
    static: {
      publicPath: '/dist',
      directory: path.resolve(__dirname, 'dist'),
    },
    hot: true,
    historyApiFallback: true,
    proxy: {},
  },
};
