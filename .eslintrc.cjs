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
    // 파일에서 하나의 코드만 내보낼 때 export default를 사용하게 하는 규칙 off
    'import/prefer-default-export': 'off',
    // 화살표 함수 허용
    'react/function-component-definition': [
      2,
      { namedComponents: ['arrow-function', 'function-declaration'] },
    ],
    // emotion css props
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    // 구조분해할당 강제하는 규칙 off
    'react/destructuring-assignment': 'off',
    // props 무조건 1개 이상 존재해야 하는 규칙 off
    'react/require-default-props': 'off',
    // airbnb config에서 htmlFor와 nesting을 모두 사용하도록 강제하는 세팅 비활성화
    'jsx-a11y/label-has-associated-control': ['error', {}],
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
