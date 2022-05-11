let config = {
  mode: 'production',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["C:\\Users\\Teszt3\\Desktop\\java\\Tic-Tac-Toe\\build\\js\\packages\\Tic-Tac-Toe\\kotlin-dce\\Tic-Tac-Toe.js"]
};

config.output = {
    path: "C:\\Users\\Teszt3\\Desktop\\java\\Tic-Tac-Toe\\build\\distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "Tic-Tac-Toe.js"
            : "Tic-Tac-Toe-[name].js";
    },
    library: "Tic-Tac-Toe",
    libraryTarget: "umd",
    globalObject: "this"
};

// resolve modules
config.resolve.modules.unshift("C:\\Users\\Teszt3\\Desktop\\java\\Tic-Tac-Toe\\build\\js\\packages\\Tic-Tac-Toe\\kotlin-dce")

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = 'source-map';
config.ignoreWarnings = [/Failed to parse source map/]

// Report progress to console
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const webpack = require('webpack');
    const handler = (percentage, message, ...args) => {
        const p = percentage * 100;
        let msg = `${Math.trunc(p / 10)}${Math.trunc(p % 10)}% ${message} ${args.join(' ')}`;
        msg = msg.replace("C:\\Users\\Teszt3\\Desktop\\java\\Tic-Tac-Toe\\build\\js", '');;
        console.log(msg);
    };

    config.plugins.push(new webpack.ProgressPlugin(handler))
})(config);

// css settings
;(function(config) {
    ;(function(config) {
       const use = [
           {
               loader: 'css-loader',
               options: {},
           }
       ]
       use.unshift({
           loader: 'style-loader',
           options: {}
       })
       
       config.module.rules.push({
           test: /\.css$/,
           use: use,
           
           
       })

   })(config);
            
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
// save evaluated config file
;(function(config) {
    const util = require('util');
    const fs = require('fs');
    const evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
    fs.writeFile("C:\\Users\\Teszt3\\Desktop\\java\\Tic-Tac-Toe\\build\\reports\\webpack\\Tic-Tac-Toe\\webpack.config.evaluated.js", evaluatedConfig, function (err) {});
})(config);

module.exports = config
