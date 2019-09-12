process.env.TS_NODE_FILES = true
require('ts-node').register()

module.exports.config = {
    specs: ['specs/*.ts'],
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    // directConnect: true,
    capabilities: {
        browserName: 'chrome',
        maxInstances: 1,
        enableVNC: true
        },
    baseUrl: 'https://angularjs.org/',
    onPrepare: function () {
        beforeAll(function () {

        })
        beforeEach(() => {

        })
        afterEach(()=>{

        })
        afterAll(() => {

        })
    }
}