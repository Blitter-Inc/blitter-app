module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '$assets': './src/assets',
            '$components': './src/app/components',
            '$config': './src/app/config',
            '$navigations': './src/app/navigations',
            '$modules': './src/app/modules',
            '$services': './src/app/services',
            '$store': './src/app/store',
            '$types': './src/app/types',
            '$helpers': './src/app/helpers',
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          'moduleName': '@env',
          'path': '.env',
          'blocklist': null,
          'allowlist': null,
          'safe': false,
          'allowUndefined': true,
          'verbose': false
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
