module.exports = {
  root: true,
  extends: ['@react-native-community', 'react-native-wcandillon'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'reanimated'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'prettier/prettier': [
          'error',
          {},
          {
            arrowParens: 'avoid',
            bracketSameLine: true,
            bracketSpacing: false,
            singleQuote: true,
            trailingComma: 'all',
          },
        ],
      },
    },
  ],
  rules: {
    'reanimated/js-function-in-worklet': 2,
  },
};
