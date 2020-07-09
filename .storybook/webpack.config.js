const path = require('path');

module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { parser: 'typescript' },
      },
    ],
    enforce: 'pre',
    include: [path.resolve(__dirname, '../src')],
  });

  return config;
};
