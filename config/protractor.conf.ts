import {Config} from 'protractor'

const config: Config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  // directConnect: true,

  capabilities: {
    browserName: 'chrome',
    maxInstances: 1,
    enableVNC: true
  },

  baseUrl: 'https://angularjs.org/',

  specs: ['specs/*.spec.ts'],

  framework: 'mocha',
  mochaOpts: {
    reporter: process.env.SPEC_REPORTER ? 'spec' : 'mocha-allure2-reporter',
    timeout: 30 * 1000
  },

  onPrepare: function () {
    console.log('Protractor is ready!')
  }
}

export {config}