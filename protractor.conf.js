process.env.TS_NODE_FILES = true
require('ts-node').register()

module.exports.config = {
    specs: ['specs/*.ts'],
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
        maxInstances: 1
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