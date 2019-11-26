import { browser, $, $$, element, by, ExpectedConditions as ES } from 'protractor'
import {expect} from 'chai'
import {addAllureStep} from '../utils/allure'
import {sleep} from '../utils/utils'

describe('Allure steps example suite', () => {
  it('One is equal to one with allure steps', async function () {

    await addAllureStep('get step', () => browser.get(''))
    await addAllureStep('sleep by Promise', () => sleep(2000))
    await addAllureStep('sleep by browser', () => browser.sleep(2000))
    expect(1).to.equal(1, '1 should be equal to 1, smth went really wrong')
  })
})
