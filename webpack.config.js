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
	devtool: '',
	plugins: []
}

if (process.env.NODE_ENV !== 'production') {

	WebpackExport.devtool = '#cheap-module-eval-source-map';

	WebpackExport.devServer = {
		historyApiFallback: true,
		noInfo: true
	};

	WebpackExport.module.loaders.push(
		{
			test: /\.scss$/,
			loader: 'style-loader!css!resolve-url!sass?sourceMap'
		},
		{
			test: /.*\.(gif|png|jpe?g|svg)$/i,
			loaders: 'file-loader'
		}
	);
}

if (process.env.NODE_ENV === 'production') {

	WebpackExport.devtool = '#cheap-module-source-map'

	// Extract CSS (module loader)
	WebpackExport.module.loaders.push(
		{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('css!resolve-url!sass?sourceMap')
		}
	);

	// Webpack Image
	WebpackExport.module.loaders.push(
		/*{
			test: /.*\.(gif|png|jpe?g|svg)$/i,
			loaders: [
				'file-loader?name=img/[sha512:hash:base64:7].[ext]',
				{
					loader: 'image-webpack',
					query: {
						progressive: true,
						optimizationLevel: 7,
						interlaced: false,
						mozjpeg: {
							quality: '60',
						},
						pngquant: {
							quality: '65',
							speed: 4
						}
					}
				}
			]
		}*/
		{
			test: /.*\.(gif|png|jpe?g|svg)$/i,
			loaders: 'file-loader'
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
			['/fr', '/en', '/fr/projects', '/en/projects', '/fr/projects/occ', '/en/projects/occ', '/fr/projects/save', '/en/projects/save', '/fr/projects/coupsur', '/en/projects/coupsur', '/fr/projects/elium', '/en/projects/elium', '/fr/about', '/en/about', '/fr/contact', '/en/contact'],
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