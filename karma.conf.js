// Karma configuration
// Generated on Tue Jun 14 2016 14:12:00 GMT+0800 (HKT)
const helper = require('@alife/kmcsw-helper');

const webpackConfig = helper.getWebpackConfig();

// 使用共享帐号
const f2eConfig = {
  'f2etest.userid': 'ued-ut',
  'f2etest.apiKey': '0b51d56a6c8e8c73d43de2a623f92c2e'
};

const f2eBrowsers = require('@alife/karma-f2e-launcher')(f2eConfig);

// for babel-plugin-__coverage__
if (!process.env.NODE_ENV) process.env.NODE_ENV = 'test';

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    client: {
      mocha: {
        reporter: 'html'
      },
    },


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon', 'expect'],


    // list of files / patterns to load in the browser
    // set watched to false resolved the problem of tests running twice
    files: [
      {
        pattern: 'test/setup.js',
        watched: false,
        included: true,
        served: true,
      },
      {
        pattern: 'test/**/*-spec.js*',
        watched: false,
        included: true,
        served: true,
      }
    ],


    // list of files to exclude
    exclude: [
      'test/demo'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.js*': ['webpack']
    },

    webpack: webpackConfig,

    webpackServer: {
      noInfo: true // please don't spam the console when running in karma!
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage', 'json'],

    coverageReporter: {
      // specify a common output directory
      dir: './coverage',
      reporters: [
        // html reporter for 秋知
        { type: 'html', subdir: 'report-html' },
        // text reporter for terminal
        { type: 'text-summary' },
        // lcov reporter for ci-log
        { type: 'lcovonly', subdir: '.', file: 'lcov.info' }
      ]
    },

    jsonReporter: {
      stdout: false,
      outputFile: 'test-results.json' // defaults to none
    },

    // use ip for remote webdriver browser
    hostname: helper.ip() || 'localhost',

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // set longer to avoid f2e browsers timeout
    browserNoActivityTimeout: 30000,

    customLaunchers: f2eBrowsers,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
