const { defaults: tsjPreset } = require('ts-jest/presets')

module.exports = {
  ...tsjPreset,
  cacheDirectory: '.jest/cache',
  globals: {
    'ts-jest': {
      babelConfig: true
    }
  },
  preset: 'react-native',
  transform: {
    ...tsjPreset.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js'
  }
}
