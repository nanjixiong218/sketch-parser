module.exports = {
    bdd: {
        getWebpackConfig() {
            return require('./srcipts/webpack.config.start').prod();
        }
    }
}