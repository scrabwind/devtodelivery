import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: {
    tsconfigPath: 'tsconfig.json',
    overrides: {
      'ts/consistent-type-definitions': ['error', 'type'],
      'antfu/no-top-level-await': 'off',
      'no-console': 'warn',
      'ts/no-unsafe-argument': 'off',
      'ts/no-unsafe-assignment': 'off',
      'ts/no-unsafe-call': 'off',
      'ts/no-unsafe-member-access': 'off',
      'ts/no-unsafe-type-assertion': 'off'

    }
  },
  stylistic: {
    overrides: {
      'style/comma-dangle': 'error',
      'node/prefer-global/process': 'off'
    }
  }
})
