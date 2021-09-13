module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@assets': './src/assets',
            '@components': './src/app/components',
            '@config': './src/app/config',
            '@navigations': './src/app/navigations',
            '@screens': './src/app/screens',
            '@services': './src/app/services',
            '@store': './src/app/store',
          },
        },
      ],
    ],
  };
};
