module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  coveragePathIgnoraPatterns: ['node_modules/*'],
  globalTeardown: './global-kill.js',
  collectCoverage: true,
  coverageReporters: ['json', 'html']
}
