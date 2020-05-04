module.exports = {
  presets: ["module:metro-react-native-babel-preset", "module:react-native-dotenv"],
  env: {
    production: {},
  },
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
    ["@babel/plugin-proposal-optional-catch-binding"],
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          "@components": "./app/components",
          "@theme": "./app/theme",
          "@assets": "./app/assets",
        }
      }
    ]
  ],
}
