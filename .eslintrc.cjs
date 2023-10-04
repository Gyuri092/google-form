module.exports = {
  root: true,
  env: { browser: true, node: true },
  ignorePatterns: ['node_modules', 'dist', 'build', 'public', '.eslintrc.cjs'],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // import
    // .js, .jsx, .ts, .tsx는 임포트 시 확장자 생략
    'import/extensions': [
      'error',
      'always',
      {
        ignorePackages: true,
        pattern: {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      },
    ],
    // jsx 문법을 .tsx 파일에서도 허용
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    // console.log 찾기 쉽게 경고로 표시
    'no-console': 'warn',
    // React import문 생략
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: ['arrow-function', 'function-declaration'] },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: '**/tsconfig.json',
      },
    },
  },
  root: true,
};
