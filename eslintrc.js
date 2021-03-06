// needs to be a JS file to find the relative path of dep

const parserPath = require.resolve('@typescript-eslint/parser')

module.exports = {
  extends: [
    'standard',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'//,
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parser: parserPath,

  env: {
    browser: false,
    node: true,
    es6: true
  },

  plugins: [
    '@typescript-eslint',
    'jsdoc',
    'jsdoc-typescript',
    'import',
    'node',
    'promise'
  ],

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/no-var-requires': ['error']
      }
    }
  ],

  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': ['error'],

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],

    'no-return-await': 'error',
    'no-async-promise-executor': 'error',

    // annoying af in standard. just want SCREAMING_CASE for env vars.
    'quote-props': ['error', 'consistent'],

    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Object: {
            message: 'Avoid using the `Object` type. Did you mean `object`?'
          },
          Function: {
            message: 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.'
          },
          Boolean: {
            message: 'Avoid using the `Boolean` type. Did you mean `boolean`?'
          },
          Number: {
            message: 'Avoid using the `Number` type. Did you mean `number`?'
          },
          String: {
            message: 'Avoid using the `String` type. Did you mean `string`?'
          },
          Symbol: {
            message: 'Avoid using the `Symbol` type. Did you mean `symbol`?'
          }
        }
      }
    ],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public'
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase']
      },
      {
        selector: 'objectLiteralProperty',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase']
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase']
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'method',
        format: ['camelCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'function',
        format: ['camelCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require'
      },
      {
        selector: 'typeLike',
        format: ['PascalCase']
      }
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extraneous-class': [
      'error',
      {
        allowConstructorOnly: true,
        allowEmpty: false,
        allowStaticOnly: false,
        allowWithDecorator: false
      }
    ],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-param-reassign': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-expressions': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/triple-slash-reference': [
      'off',
      {
        path: 'always',
        types: 'prefer-import',
        lib: 'always'
      }
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/typedef': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/unified-signatures': 'off',

    'jsdoc-typescript/require-constructor-property': 'error',

    'jsdoc/check-alignment': 'error',
    'jsdoc/check-indentation': 'off',
    'jsdoc/newline-after-description': 'error',
    'jsdoc/no-types': 'off',
    'jsdoc/require-jsdoc': [
      'error',
      {
        publicOnly: false,
        exemptEmptyFunctions: true,
        require: {
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true,
          ClassExpression: false,
          ClassDeclaration: false
        }
      }
    ],
    'jsdoc/require-property': 'error',
    'jsdoc/require-property-type': 'error',
    'jsdoc/require-returns': [
      'error',
      {
        forceRequireReturn: true,
        forceReturnsWithAsync: true
      }
    ],
    'jsdoc/require-returns-type': 'error'
  }
}
