module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, parser: 'typescript' }],
    'comma-dangle': ['off'],
  },
};
