const name = 'sajad'
const age = 31
const location = 'UK'

const details = {
  name: name,
  age: age,
  location: location,
}

function printDetails() {
  console.log(
    `Name: ${details.name}, Age: ${details.age}, Location: ${details.location}`,
  )
}

function main() {
  console.log('Starting the application...')
  debugger
  printDetails()
  console.log('Application finished.')
}

main()
