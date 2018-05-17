const path = require('path');

module.exports = {
    entry: './src/js/app/app.js',
    output: {
        filename: './bundle.js'
    },
		watch: true,
    module: {
			rules: [
	      {
	        test: /\.vue$/,
	        loader: 'vue-loader',
	        options: {
	          loaders: {
	          }
	          // other vue-loader options go here
	        }
	      },
	      {
	        test: /\.js$/,
	        loader: 'babel-loader',
	        // exclude: /node_modules/
	      },
				{
	        test: /\.css$/,
	        use: [
	          'vue-style-loader',
	          // 'css-loader'
	        ]
	      },
	    ]
    },
		resolve: {
			modules: ['./node_modules'],
		},
		// plugins: [
	  //   // make sure to include the plugin for the magic
	  //   new VueLoaderPlugin()
	  // ]
};
