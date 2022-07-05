/* postcss.config.cjs */
const autoprefixer = require("autoprefixer");
const postcss_nested = require('postcss-nested');

const config = {
  plugins: [
    autoprefixer, 
    postcss_nested
  ],
};

module.exports = config;