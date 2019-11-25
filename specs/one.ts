import { browser, $, $$, element, by, ExpectedConditions as ES } from 'protractor'
import {expect} from 'chai'

describe('First suite', () => {
  it('One is equal to one', async function () {
    await browser.get('')
    await browser.sleep(3000)
    expect(1).to.equal(1, '1 should be equal to 1, smth went really wrong')
  })
})