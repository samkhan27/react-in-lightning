let path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const fs = require('fs');

// Get the entrypoints
let filenames = [];

fs.readdirSync(path.resolve(__dirname, 'app/entryPoints')).forEach((filename) => {
    if (filename.includes('.dev.js') === false && filename.includes('.prod.js') === false) {
        filenames.push(filename.slice(0, filename.lastIndexOf('.')));
    }
});

let entries = filenames.reduce((acc, item) => {
    acc[item] = `./app/entryPoints/${item}.js`;
    return acc;
}, {});

let baseConfig = {
    entry: entries,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
        publicPath: '/build/',
        pathinfo: false,
        libraryTarget: 'window',
        library: ['ReactSalesforce', '[name]'] // Will attached in window as ReactSalesforce.<EntryPointName>
    },
    devServer: {
        contentBase: '.',
        publicPath: '/build/',
        watchContentBase: false,
        hotOnly: true,
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, 'app'),
                    path.resolve(__dirname, 'node_modules/@salesforce/design-system-react'),
                    path.resolve(__dirname, '__mocks__')
                ],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'images/[hash]-[name].[ext]'
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = (env) => {
    console.log(`Running in ${env === 'development' ? 'development' : 'production'} mode`);
    console.log(entries);

    if (env === 'development') {
        return merge(baseConfig, {
            mode: 'none',
            devtool: 'eval-source-map',
            plugins: [
                new webpack.EnvironmentPlugin({
                    NODE_ENV: 'development',
                    DEBUG: false
                })
            ]
        });
    }

    // PRODUCTION BUILD TO BOTH LOCAL AND SALESFORCE STATIC RESOURCES
    let wpConfig = merge(baseConfig, {
        mode: 'production',
        entry: entries,
        plugins: [
            new webpack.EnvironmentPlugin({
                NODE_ENV: 'production',
                DEBUG: false
            })
        ]
    });

    return [
        wpConfig,
        // merge(wpConfig, {
        //     output: {
        //         path: path.resolve(__dirname, '../sfdx-source/<PACKAGE_NAME>/main/core/staticresources/<STATIC_RESOURCE>'),
        //     },
        // })
    ];
};
