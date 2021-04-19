const fs = require('fs')
const path = require('path')

module.exports = (eleventyConfig) => {

  return {
    dir: {
      input: 'pages'
    },
    markdownTemplateEngine: 'njk'
  }
}
