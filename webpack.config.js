const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // SVG rule
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [
          /\.(js|ts)x?$/, // Only apply to SVGs used in JS/TS/JSX/TSX files
        ]
      },
      use: ['@svgr/webpack'],
    });

    // Resolve SVG loader (optional)
    config.resolve.extensions.push('.svg');

    if (!isServer) {
      // SVG loader configuration for development (optional, adjust based on your needs)
      config.module.rules.find(rule => rule.test?.test(/\.svg$/)).use.push({
        loader: 'url-loader',
        options: {
          limit: 8192, // Inline SVGs below this size
          fallback: 'file-loader',
          outputPath: 'static/svg', // Output directory for larger SVGs
        },
      });
    }

    return config;
  },
  // Other Next.js configurations...
};
