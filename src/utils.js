const fs = require('fs')

/**
 * Checks if a path exists
 *
 * @param filePath - file path to check
 * @returns {boolean} - does the file path exist?
 */
function isPathExists (filePath) {
  try {
    fs.accessSync(filePath)
    return true
  } catch (err) {
    return false
  }
}

module.exports = {
  isPathExists
}
