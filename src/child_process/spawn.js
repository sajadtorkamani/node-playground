import { spawn } from 'child_process'

const whoami = spawn('whoami')

whoami.on('data', (data) => {
  console.log(`stdout: ${data}`)
})

whoami.on('error', (error) => {
  console.log(`stderr: ${error.message}`)
})

whoami.on('close', (code) => {
  console.log(`child process exited with code ${code}`)
})
