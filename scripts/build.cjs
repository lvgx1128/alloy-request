const fse = require('fs-extra')
const pick = require('lodash/pick')
const merge = require('lodash/merge')
const path = require('path')
const execa = require('execa')

;(async function main() {
  try {
    await execa('npx', ['vite', 'build'], {
      stdout: process.stdout,
      stderr: process.stderr
    })
    await fse.copy('readme.md', 'packages/readme.md')
    await fse.writeJson(
      path.resolve(process.cwd(), 'packages/package.json'),
      merge(
        pick(require(path.resolve(process.cwd(), 'package.json')), [
          'name',
          'version',
          'private',
          'type',
          'keywords',
          'files',
          'bugs',
          'license',
          'repository',
          'main',
          'module',
          'types',
          'peerDependencies'
        ]),
        {
          scripts: {
            release: 'np --yolo=true --skip-2fa'
          },
          dependencies: {
            nookies: '^2.5.2'
          }
        }
      )
    )
    process.exit()
  } catch (error) {
    process.exit(1)
  }
})()
