# Find npm on Windows
This little script finds npm on Windows. It was initially built for [npm-windows-upgrade](https://github.com/felixrieseberg/npm-windows-upgrade) and then broken out so that people could use it to find npm, too. It has no production dependencies.

#### Usage
```
const findNpm = require('find-npm')

// Promise
findNpm().then(result => {
    const npmFoundIn = result.path
    const strategyUsed = result.from
    const explaination = result.message
})

// With async/await
const npmPaths = await findNpm()

const npmFoundIn = npmPaths.path
const strategyUsed = npmPaths.from
const explaination = npmPaths.message
```

### License
MIT, please see `LICENSE` for details. Copyright (c) 2015 Felix Rieseberg.