module.exports = ({ env }) => ({
  plugins: {
    'postcss-modules-values': {},
    'postcss-preset-env': {},
    'postcss-nested-props': {},
    'postcss-normalize': {},
    'postcss-import': {},
    'postcss-flexbugs-fixes': {},
    lost: {},
    cssnano: env === 'production' ? { preset: 'advanced' } : false,
  },
});
