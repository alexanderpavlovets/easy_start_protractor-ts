
// mocha-allure2-reporter will create "allure" variable in global scope
declare const allure: any

async function addAllureStep(message: string, cb: Function) {
  if (process.env.SPEC_REPORTER) {
    return cb()
  }
  
  return allure.step(message, cb)
}

export {addAllureStep}
