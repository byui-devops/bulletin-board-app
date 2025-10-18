module.exports = {
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
  coverageThreshold: {
    global: { lines: 80, statements: 80, branches: 80, functions: 80 }
  },
  coveragePathIgnorePatterns: ["/node_modules/", "/dist/", "/build/"]
};
