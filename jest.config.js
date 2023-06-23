module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 10000,
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  coveragePathIgnoraPatterns: ['node_modules/*'],
  globalTeardown: './global-kill.js',
  collectCoverage: true,
  coverageReporters: ['json', 'html']
}
