const path = require('path')
const fs = require('fs-extra')
const webpack = require('webpack')
const fstream = require('fstream')
const unzip = require('unzip')

const config = require('./webpack.config.start');

// run webpack
const compiler = webpack(config)
compiler.run((err, stats) => {
	if (err) {
		return reject(err)
	}else{
		console.warn('packer is success!');
	}
});