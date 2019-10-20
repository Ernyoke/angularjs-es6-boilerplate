const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV,
    cache: true,
    context: __dirname,
    performance: {
        hints: false
    },
    devtool: "sourcemap",
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        compress: true,
        inline: true,
        hot: true,
        quiet: false,
        port: 4200,
        historyApiFallback: true,
        stats: {
            chunks: false,
            chunkModules: false
        }
    },
    entry: {
        app: ["./src/app/app.js"]
    },
    output: {
        filename: '[name].bundle-[hash]-[id].js',
        chunkFilename: '[name].chunk-[chunkhash]-[id].js',
        sourceMapFilename: '[name].bundle-[hash]-[id].map',
        path: path.join(__dirname, 'build')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        },
        minimizer: [new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                ie8: false,
                mangle: true,
                toplevel: false,
                compress: {
                    booleans: true,
                    conditionals: true,
                    dead_code: true,
                    drop_debugger: true,
                    drop_console: true,
                    evaluate: true,
                    sequences: true,
                    unused: true
                },
                output: {
                    comments: false,
                    beautify: false,
                }
            }
        })]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.join(__dirname, "src")
                ],
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: [
                            ["@babel/plugin-transform-runtime", { corejs: 2 }],
                            ["angularjs-annotate", { explicitOnly: false }],
                            "lodash"
                        ],
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.(html)$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: false,
                            collapseWhitespace: false
                        }
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },
            {
                test: [
                    /fontawesome-webfont\.svg/,
                    /fontawesome-webfont\.eot/,
                    /fontawesome-webfont\.ttf/,
                    /fontawesome-webfont\.woff/,
                    /fontawesome-webfont\.woff2/],
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },
    node: {
        fs: "empty",
        global: true
    },
    resolve: {
        extensions: [".js"],
        modules: ["node_modules", __dirname]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        }),
        new HtmlWebPackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            minify: false,
            inject: "body",
            hash: false
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
