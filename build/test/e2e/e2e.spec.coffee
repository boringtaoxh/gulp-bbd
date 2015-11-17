'use strict'

describe 'text input', ->
  it 'should bind to input', ->
    browser.get 'http://localhost:3000/'
    emceeInput = element(By.model('emcee'))
    emceeOutput = element(By.binding('emcee'))
    emceeInput.clear()
    emceeInput.sendKeys 'Aesop Rock'
    expect(emceeOutput.getText()).toBe 'Aesop Rock'
    return
  return
describe 'list details', ->
  beforeEach ->
    browser.get 'http://localhost:3000/'
    firstElement = element.all(By.binding('product')).first()
    firstElement.click()
    browser.waitForAngular()
    return
  describe 'when clicking on the product', ->
    it 'should go to the detail page', ->
      firstElement = element.all(By.binding('product')).first()
      expect(firstElement.getText()).toMatch 'C# for Sociopaths'
      return
    it 'should update the url', ->
      expect(browser.getCurrentUrl()).toMatch '#'
      return
    return
  return