const js = require('@eslint/js');
const globals = require('globals');
const reactHooks = require('eslint-plugin-react-hooks');
const reactRefresh = require('eslint-plugin-react-refresh');

module.exports = {
  overrides: [
    {
      files: ['**/*.{js,jsx}'],
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        globals: globals.browser,
      },
      plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
      },
      rules: {
        ...js.configs.recommended.rules,
        ...reactHooks.configs.recommended.rules,
        'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
      },
    },
  ],
};
