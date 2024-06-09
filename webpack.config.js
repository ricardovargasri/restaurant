const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/, // Busca archivos con extensión .css
        use: [
          'style-loader', // Inyecta CSS en el HTML
          'css-loader' // Procesa y carga CSS
        ]
      }
    ]
  },
  mode: 'development',
  entry: './src/index.js',
  output: {
    
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Ruta a tu archivo HTML
      filename: './index.html' // Nombre del archivo HTML final
      
    })
  ]
};