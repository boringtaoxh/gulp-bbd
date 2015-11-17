exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test/e2e/e2e.spec.js'],
  mochaOpts: {
    reporter: "spec",
    slow: 3000
  }
};
