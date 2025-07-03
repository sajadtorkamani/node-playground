import child_process from 'node:child_process'
import util from 'node:util'

const exec = util.promisify(child_process.exec)

export async function getRootDir() {
  const { stdout } = await exec('git rev-parse --show-toplevel')
  return stdout.trim()
}
