import { exec } from 'node:child_process'

exec('whoami', (error, stdout, stderr) => {
  console.log(`stdout: ${stdout}`)
  console.log(`stderr: ${stderr}`)
  console.log(`error: ${error}`)
})
