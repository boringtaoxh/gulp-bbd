'use strict';
describe('text input', function() {
  it('should bind to input', function() {
    var emceeInput, emceeOutput;
    browser.get('http://localhost:3000/');
    emceeInput = element(By.model('emcee'));
    emceeOutput = element(By.binding('emcee'));
    emceeInput.clear();
    emceeInput.sendKeys('Aesop Rock');
    expect(emceeOutput.getText()).toBe('Aesop Rock');
  });
});

describe('list details', function() {
  beforeEach(function() {
    var firstElement;
    browser.get('http://localhost:3000/');
    firstElement = element.all(By.binding('product')).first();
    firstElement.click();
    browser.waitForAngular();
  });
  describe('when clicking on the product', function() {
    it('should go to the detail page', function() {
      var firstElement;
      firstElement = element.all(By.binding('product')).first();
      expect(firstElement.getText()).toMatch('C# for Sociopaths');
    });
    it('should update the url', function() {
      expect(browser.getCurrentUrl()).toMatch('#');
    });
  });
});

describe('route testing', function() {
  beforeEach(function() {
    return browser.get('http://localhost:3000/');
  });
  it('should go to the home page', function() {
    return expect(browser.getLocationAbsUrl()).toContain('http://localhost:3000/');
  });
  it('should show a load button on home page', function() {
    var button;
    button = element(By.buttonText('Post'));
    return expect(button.isPresent()).toBeTruthy();
  });
});
