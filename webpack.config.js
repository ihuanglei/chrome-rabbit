const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpachPlugin = require('copy-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: {
    index: './src/main.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'js/[name].js'
  },
  devServer: {
    port: 8080,
    contentBase: './src/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/plugin-syntax-dynamic-import']
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|svg|gif)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['*', '.js', '.json', '.vue']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new CopyWebpachPlugin([
      { from: './src/assets/icons', to: 'icons' },
      {
        from: './src/pages/popup.html',
        to: 'popup/popup.html'
      },
      {
        from: './src/assets/js/popup.js',
        to: 'popup/popup.js'
      },
      {
        from: './src/assets/js/background.js',
        to: 'background.js'
      },
      {
        from: './src/manifest.json',
        to: 'manifest.json'
      }
    ]),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ]
}
