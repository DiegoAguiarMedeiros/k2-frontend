module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            // Remove sass-loader
            // 'sass-loader'
            {
              loader: 'postcss-loader',
              // ...
            },
            {
              // Replace sass-loader with 'sass' package
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
                sassOptions: {
                  // Additional options for Sass if needed
                },
              },
            },
          ],
        },
        // ...
      ],
    },
    // ...
  };
  