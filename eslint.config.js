import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: {
    tsconfigPath: 'tsconfig.json',
    overrides: {
      'ts/consistent-type-definitions': ['error', 'type'],
      'antfu/no-top-level-await': 'off',
      'no-console': 'warn',
      'ts/explicit-function-return-type': 'off',
      'ts/explicit-module-boundary-types': 'off',
      'ts/no-explicit-any': 'off',
      'eslint-comments/no-unlimited-disable': 'off'
    }
  },
  stylistic: {
    overrides: {
      'style/comma-dangle': 'error',
      'node/prefer-global/process': 'off'
    }
  }
})
