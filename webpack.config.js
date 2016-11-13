var path = require('path')
var webpack = require('webpack')
var PrerenderSpaPlugin = require('prerender-spa-plugin')
var BabelPolyFill = require("babel-polyfill")
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var WebpackExport = {
	entry: ['babel-polyfill', './src/main.js'],
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'build.js'
	},
	resolveLoader: {
		root: path.join(__dirname, 'node_modules'),
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /.(woff(2)?|eot|ttf)(\?[a-z0-9=\.]+)?$/, 
				loader: 'url-loader?limit=100000' 
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	devtool: '#eval-source-map',
	plugins: []
}

if (process.env.NODE_ENV !== 'production') {

	// Load Images
	WebpackExport.module.loaders.push(
		{
			test: /.*\.(gif|png|jpe?g|svg)$/i,
			loaders: 'file-loader'
		}
	);

	// Style Loader
	WebpackExport.module.loaders.push(
		{
			test: /\.scss$/,
			loader: 'style-loader!css!resolve-url!sass?sourceMap'
		}
	);
}

if (process.env.NODE_ENV === 'production') {

	WebpackExport.module.devtool = '#source-map'

	// Webpack Image
	WebpackExport.module.loaders.push(
		{
			test: /.*\.(gif|png|jpe?g|svg)$/i,
			loaders: ['file-loader',
				{
					loader: 'image-webpack',
					query: {
						progressive: true,
						optimizationLevel: 7,
						interlaced: false,
						mozjpeg: {
							quality: '70',
						},
						pngquant: {
							quality: '65-90',
							speed: 4
						}
					}
				}
			]
		}
	);

	// Extract CSS (module loader)
	WebpackExport.module.loaders.push(
		{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('css!resolve-url!sass?sourceMap')
		}
	);

	// Exctract CSS (plugin)
	WebpackExport.plugins.push(
		new ExtractTextPlugin("css/main.css")
	);
		
	// Define Poduction
	WebpackExport.plugins.push(
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		})
	);

	// UglifyJS
	WebpackExport.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	);
	
	// Prepender	
	WebpackExport.plugins.push(
		new PrerenderSpaPlugin(
			path.join(__dirname, ''),
			['/fr/', '/en/', '/fr/contact', '/en/contact'],
			{
				captureAfterElementExists: '#app',
				maxAttempts: 10,
				phantomOptions: '--disk-cache=false',
				phantomPageSettings: {
					loadImages: false
				}
			}
		)
	);
}


module.exports = WebpackExport;