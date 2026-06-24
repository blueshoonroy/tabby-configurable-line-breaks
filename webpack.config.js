const path = require('path')

module.exports = {
    target: 'node',
    entry: path.resolve(__dirname, 'src/index.ts'),
    context: __dirname,
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimize: false,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        pathinfo: true,
        libraryTarget: 'umd',
        devtoolModuleFilenameTemplate: 'webpack-tabby-configurable-line-breaks:///[resource-path]',
    },
    resolve: {
        modules: ['.', 'src', 'node_modules', '../app/node_modules'].map(x => path.join(__dirname, x)),
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: { allowTsInNodeModules: true },
                },
            },
        ],
    },
    externals: [
        'fs',
        'path',
        /^rxjs/,
        /^@angular/,
        /^@ng-bootstrap/,
        /^tabby-/,
    ],
}
