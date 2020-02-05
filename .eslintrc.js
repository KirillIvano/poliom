module.exports = {
    'env': {
        'es6': true,
        'node': true,
        'browser': true,
    },
    "extends": ['eslint:recommended'],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2019,
        'sourceType': 'module'
    },
    'rules': {
        'indent': ['error', 4],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
    
        'arrow-spacing': ['error'],
        'prefer-arrow-callback': ['error'],
        // 'prefer-const': ['error'],
        'camelcase': ['error'],
        'comma-dangle': ['error', 'always-multiline'],
        'eol-last': ['error'],
        'key-spacing': ['error'],
        'no-trailing-spaces': ['error'],
        'handle-callback-err': ['error'],
        'max-len': ['warn', {code: 120}]
    }
};