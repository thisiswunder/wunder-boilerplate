module.exports = {
  extends: ['universe/native', 'universe/shared/typescript-analysis'],
  plugins: ['@react-native', 'prettier', 'simple-import-sort'],
  env: { es6: true },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
  ],
  rules: {
    'prettier/prettier': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/order': 'off',
  },
};
