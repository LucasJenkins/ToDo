import fs, { read } from 'fs'

const readFileCallback = (err, data) => {
  if (err) {
    console.log(err)
  }

  // Do something with data
  const helloData = JSON.parse(data)

  console.log(data)

  // write new data to a different file
  fs.writeFile('./goodbye.json', JSON.stringify(helloData), err => {
    if (err) {
      console.log(err)
    } else {
      console.log('Successfully wrote to the file')
    }
  })

  console.log("Writing a file. It's gonna happen")
}

fs.readFile('./hello.json', readFileCallback)

const higherOrder = f => {
  // do something

  f()
}

const callback = () => console.log('You called me back')

higherOrder(callback)
