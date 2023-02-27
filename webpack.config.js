const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const deps = require('./package.json').dependencies;

const { NODE_ENV } = process.env;
const mode = NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode,

  devtool: mode === 'development' ? 'inline-source-map' : undefined,

  output: {
    publicPath: '/',
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json', '.tsx', '.ts'],
    alias: {
      react: path.resolve(__dirname, 'node_modules', 'react'),
      'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom'),
      '@linaria/react': path.resolve(
        __dirname,
        'node_modules',
        '@linaria/react',
      ),
      '@linaria/core': path.resolve(__dirname, 'node_modules', '@linaria/core'),
      components: path.resolve(__dirname, 'src/components'),
      config: path.resolve(__dirname, 'src/config'),
      core: path.resolve(__dirname, 'src/core'),
      pages: path.resolve(__dirname, 'src/pages'),
      uikit: path.resolve(__dirname, 'src/uikit'),
      modules: path.resolve(__dirname, 'src/modules'),
      app: path.resolve(__dirname, 'src/app'),
    },
  },

  devServer: {
    port: 8080,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(tsx?|js)$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: '@linaria/webpack-loader',
            options: {
              sourceMap: mode !== 'production',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: mode !== 'production',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new Dotenv(),
    new ModuleFederationPlugin({
      name: 'starter',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename:
        mode === 'development' ? 'styles.css' : 'styles-[contenthash].css',
    }),
  ],
};
