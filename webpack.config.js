const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/ReactCrop',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'ReactCrop.js',
    libraryTarget: 'commonjs2',
    publicPath: "/dist"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.(scss|sass|css)$/,
        exclude: /(node_modules)/,
        use: [
          'css-loader',
          'sass-loader'
        ]
      }
    ],
  },
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    }
  },
  externals: {
    // Don't bundle react or react-dom      
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  }
};
