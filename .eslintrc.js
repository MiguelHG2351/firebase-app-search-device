
const RUELS = {
  OFF: 'off',
  WARN: 'warn',
  ERRRO: 'error'
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/prop-types': RUELS.OFF
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
