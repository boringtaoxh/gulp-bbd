describe('text input', function() {
  it('should bind to input', function() {
    browser.get('http://localhost:3000/');
    var emceeInput = element(by.model('emcee'));
    var emceeOutput = element(by.binding('emcee'));
    emceeInput.clear();
    emceeInput.sendKeys('Aesop Rock');
    expect(emceeOutput.getText()).toBe('Aesop Rock');
  });
});
