{
  mode: 'production',
  resolve: {
    modules: [
      'C:\\Users\\Teszt3\\Desktop\\java\\Tic-Tac-Toe\\build\\js\\packages\\Tic-Tac-Toe\\kotlin-dce',
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 5000,
      dependenciesCount: 10000,
      showEntries: true,
      showModules: true,
      showDependencies: true,
      showActiveModules: false,
      percentBy: undefined
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      'C:\\Users\\Teszt3\\Desktop\\java\\Tic-Tac-Toe\\build\\js\\packages\\Tic-Tac-Toe\\kotlin-dce\\Tic-Tac-Toe.js'
    ]
  },
  output: {
    path: 'C:\\Users\\Teszt3\\Desktop\\java\\Tic-Tac-Toe\\build\\distributions',
    filename: [Function: filename],
    library: 'Tic-Tac-Toe',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  stats: {
    warnings: false,
    errors: false
  }
}