import globals from 'globals';

export default [
  {
    'languageOptions': {
      'ecmaVersion': 'latest',
      'sourceType': 'module',
      'globals': {
        // ...globals.browser,
        ...globals.node,
      },
    },
    'rules': {
      'id-match': [
        'error',
        '^[A-Za-z_$][A-Za-z0-9_$]*$',
        {
          'properties': true,
          'classFields': true,
          'onlyDeclarations': false,
          'ignoreDestructuring': false,
        },
      ],
      'no-restricted-syntax': [
        'error',
        {
          'selector': 'Property[key.type=\'Literal\'][key.raw=/[А-Яа-яЁё]/u]',
          'message': 'Property contains Cyrillic characters.',
        },
      ],
      'eqeqeq': [
        'error',
        'always',
      ],
      'no-loop-func': [
        'error',
      ],
      'no-self-compare': [
        'error',
      ],
      'no-unmodified-loop-condition': [
        'error',
      ],
      'no-useless-concat': [
        'error',
      ],
      'curly': [
        'error',
        'multi-line',
        'consistent',
      ],
      'consistent-return': [
        'error',
      ],
      'no-return-await': [
        'error',
      ],
      'arrow-parens': [
        'error',
        'always',
      ],
      'arrow-spacing': [
        'error',
      ],
      'no-useless-computed-key': [
        'error',
      ],
      'no-useless-rename': [
        'error',
      ],
      'no-var': [
        'error',
      ],
      'object-shorthand': [
        'error',
        'always',
      ],
      'prefer-arrow-callback': [
        'error',
      ],
      'prefer-const': [
        'error',
      ],
      'prefer-numeric-literals': [
        'error',
      ],
      'prefer-rest-params': [
        'error',
      ],
      'prefer-spread': [
        'error',
      ],
      'rest-spread-spacing': [
        'error',
        'never',
      ],
      'template-curly-spacing': [
        'error',
        'never',
      ],
      'no-unused-private-class-members': [
        'error',
      ],
      'no-invalid-this': [
        'error',
      ],
      'class-methods-use-this': [
        'warn',
      ],
      'handle-callback-err': [
        'error',
        '^err',
      ],
      'no-constant-condition': [
        'error',
        {
          'checkLoops': false,
        },
      ],
      'no-return-assign': [
        'error',
      ],
      'indent': [
        'error',
        2,
        {
          'SwitchCase': 1,
          'VariableDeclarator': {
            'let': 2,
            'const': 3,
          },
          'MemberExpression': 1,
        },
      ],
      'block-spacing': [
        'error',
        'always',
      ],
      'brace-style': [
        'error',
        '1tbs',
        {
          'allowSingleLine': true,
        },
      ],
      'camelcase': [
        'error',
      ],
      'comma-dangle': [
        'error',
        'always-multiline',
      ],
      'comma-spacing': [
        'error',
        {
          'before': false,
          'after': true,
        },
      ],
      'comma-style': [
        'error',
        'last',
      ],
      'eol-last': [
        'error',
      ],
      'func-call-spacing': [
        'error',
        'never',
      ],
      'key-spacing': [
        'error',
        {
          'beforeColon': false,
          'afterColon': true,
          'mode': 'minimum',
        },
      ],
      'keyword-spacing': [
        'error',
        {
          'before': true,
          'after': true,
          'overrides': {
            'function': {
              'after': false,
            },
          },
        },
      ],
      'max-len': [
        'error',
        {
          'code': 180,
          'ignoreUrls': true,
          'ignoreTemplateLiterals': true,
        },
      ],
      'max-nested-callbacks': [
        'error',
        {
          'max': 5,
        },
      ],
      'new-cap': [
        'error',
        {
          'newIsCap': true,
          'capIsNew': false,
          'properties': true,
        },
      ],
      'new-parens': [
        'error',
      ],
      'no-lonely-if': [
        'error',
      ],
      'no-trailing-spaces': [
        'error',
      ],
      'no-multiple-empty-lines': [
        'error',
        {
          'max': 1,
          'maxEOF': 0,
        },
      ],
      'no-unneeded-ternary': [
        'error',
      ],
      'no-whitespace-before-property': [
        'error',
      ],
      'object-curly-spacing': [
        'error',
        'always',
      ],
      'operator-assignment': [
        'error',
        'always',
      ],
      'operator-linebreak': [
        'error',
        'after',
        {
          'overrides': {
            '?': 'before',
            ':': 'before',
          },
        },
      ],
      'quotes': [
        'error',
        'single',
        {
          'allowTemplateLiterals': true,
        },
      ],
      'semi': [
        'error',
        'always',
      ],
      'semi-spacing': [
        'error',
        {
          'before': false,
          'after': true,
        },
      ],
      'space-before-blocks': [
        'error',
        'always',
      ],
      'space-before-function-paren': [
        'error',
        {
          'anonymous': 'never',
          'named': 'never',
          'asyncArrow': 'always',
        },
      ],
      'space-in-parens': [
        'error',
        'never',
      ],
      'space-infix-ops': [
        'error',
      ],
      'space-unary-ops': [
        'error',
        {
          'words': true,
          'nonwords': false,
          'overrides': {
            'typeof': false,
          },
        },
      ],
      'no-shadow-restricted-names': [
        'error',
      ],
      'no-use-before-define': [
        'error',
        {
          'functions': false,
        },
      ],
      'no-unused-vars': [
        'error',
        {
          'argsIgnorePattern': '^_',
          'varsIgnorePattern': '^_',
          'caughtErrorsIgnorePattern': '^_',
        },
      ],
      'no-console': [
        'warn',
        {
          'allow': [
            'error',
            'info',
          ],
        },
      ],
      'no-extra-parens': [
        'off',
      ],
      'no-extra-semi': [
        'error',
      ],
    },
  },
];
