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
            '@navigations': './src/app/navigations',
            '@screens': './src/app/screens',
            '@store': './src/app/store',
          },
        },
      ],
    ],
  };
};
