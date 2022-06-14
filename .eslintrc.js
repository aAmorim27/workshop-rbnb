module.exports = {
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
};
