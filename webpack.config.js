module.exports = function (env) {
    console.log(`WEBPACK_ENV: ${env}`)
    return require(`./config/webpack.${env}.js`)
}