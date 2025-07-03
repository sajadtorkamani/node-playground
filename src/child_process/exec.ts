import child_process from 'node:child_process'
import util from 'node:util'

const exec = util.promisify(child_process.exec)

async function main() {
  try {
    const { stdout, stderr } = await exec('xls -la')
    console.log({ stdout, stderr })
  } catch (error) {
    console.error({ error })
  }
}

main()