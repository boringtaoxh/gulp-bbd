exports.config = {
  specs: ['test/e2e/e2e.spec.js'],
  mochaOpts: {
    reporter: "spec",
    slow: 3000
  }
};
