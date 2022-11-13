const path = require('path')

module.exports = {
  '*.{cjs,mjs,ts,tsx}': (filenames) => [
    `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],
}
