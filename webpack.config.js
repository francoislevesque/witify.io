var path = require('path')
var webpack = require('webpack')
var PrerenderSpaPlugin = require('prerender-spa-plugin')
var BabelPolyFill = require("babel-polyfill")
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var WebpackExport = {
	entry: [
		'babel-polyfill',
		'./src/main.js'
	],
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'build.js'
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /(node_modules|bower_components)/
			},
			{
				test: /.(woff(2)?|eot|ttf)(\?[a-z0-9=\.]+)?$/, 
				loader: 'url-loader?limit=100000' 
			}
		]
	},
	devtool: '',
	plugins: []
}

if (process.env.NODE_ENV === 'development') {

	WebpackExport.devtool = '#cheap-module-eval-source-map';

	WebpackExport.devServer = {
		historyApiFallback: true,
		noInfo: true
	};

	WebpackExport.module.loaders.push(
		{
			test: /\.scss$/,
			loader: 'style-loader!css-loader!resolve-url-loader!sass-loader?sourceMap'
		},
		{
			test: /.*\.(gif|png|jpe?g|svg)$/i,
			loaders: 'file-loader'
		}
	);
}

if (process.env.NODE_ENV === 'production') {
	// Webpack Image
	WebpackExport.module.loaders.push(
		{
			test: /.*\.(gif|png|jpe?g|svg)$/i,
			loaders: [
				'file-loader?name=img/[sha512:hash:base64:7].[ext]',
				{
					loader: 'image-webpack-loader',
					query: {
						mozjpeg: {
							quality: '60',
							interlaced: false,
							progressive: true,
						},
						pngquant: {
							quality: '100',
							speed: 4,
							interlaced: false,
						}
					}
				}
			]
		}
	);
}

if (process.env.NODE_ENV === 'production_fast') {
	// Webpack Image
	WebpackExport.module.loaders.push(
		{
			test: /.*\.(gif|png|jpe?g|svg)$/i,
			loaders: 'file-loader'
		}
	);
}

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'production_fast') {

	WebpackExport.devtool = '#cheap-module-source-map'

	// Extract CSS (module loader)
	WebpackExport.module.loaders.push(
		{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('css-loader!resolve-url-loader!sass-loader?sourceMap')
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
		new webpack.optimize.UglifyJsPlugin({minimize: true})
	);
	
	// Prepender	
	WebpackExport.plugins.push(
		new PrerenderSpaPlugin(
			path.join(__dirname, ''),
			['/fr', '/en', '/fr/projects', '/en/projects', '/fr/projects/mcc', '/en/projects/mcc', '/fr/projects/occ', '/en/projects/occ', '/fr/projects/save', '/en/projects/save', '/fr/projects/jussaume', '/en/projects/jussaume', '/fr/projects/coupsur', '/en/projects/coupsur', '/fr/projects/elium', '/en/projects/elium', '/fr/careers', '/en/careers', '/fr/about', '/en/about', '/fr/contact', '/en/contact'],
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