module.exports = {
  npmFoundIn: (ps, npm, truth) => `Checked system for npm installation:\nAccording to PowerShell: ${ps}\nAccording to npm:        ${npm}\nDecided that npm is installed in ${truth}`,
  npmNotFoundGuessing: (ps, npm, truth) => `Checked system for npm installation:\nAccording to PowerShell: ${ps}\nAccording to npm: ${npm}\nDecided that npm is not installed in either, but attempting to install in ${truth}`,
  givenPathNotValid: (path) => `Given path ${path} is not a valid directory.\nPlease ensure that you added the correct path and try again!`,
  givenPathValid: (path) => `Given path ${path} is a valid directory.`
}
