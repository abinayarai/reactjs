module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + "/src/build",
        filename: "index.js"
    },
    devServer: {
      inline: true,
      port: 9000
   },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',

          query: {
             presets: ['es2015', 'react']
          }
        }
      ]
    }
};
