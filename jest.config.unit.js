process.env.NODE_ENV = 'test';
const isCI = process.env.CI || process.argv.includes('--ci');

const ciReporters = [
  'jest-junit',
  {
    ancestorSeparator: ' › ',
    suiteName: 'Unit Tests',
    suiteNameTemplate: '{title}',
    classNameTemplate: '{classname}',
    titleTemplate: '{title}',
    outputDirectory: './tmp/tests/reports/unit',
  },
];

const reporters = ['default'];

if (isCI) {
  reporters.concat(ciReporters);
}

module.exports = {
  reporters,
  displayName: 'unit',
  testEnvironment: 'node',
  clearMocks: true,
  testMatch: ['<rootDir>/**/*.test.unit.js'],
  moduleNameMapper: {
    '^@common(.*)$': '<rootDir>/server/common/$1',
    '^@components(.*)$': '<rootDir>/server/components/$1',
  },
};
