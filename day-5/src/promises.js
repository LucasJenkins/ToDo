import fs from 'fs'

const resolvedFunction = msg => {
  console.log(msg)
  return 20
}
const rejectedFunction = err => {
  console.log(err)
  return 10
}

const readFile = new Promise((resolve, reject) => {
  fs.readFile('nothing.txt', (err, data) => {
    if (err) {
      reject('Could not read file: ' + err)
    } else {
      resolve(JSON.parse(data))
    }
  })
})

readFile
  .then(resolvedFunction, rejectedFunction)
  .then(resultOfFirstPromise => resultOfFirstPromise * 2)
  .then(resultOfMultiplication => console.log(resultOfMultiplication))
  .then(p => console.log(p))
  .catch(err => console.log(err))
  .finally(() => console.log('I will always run'))

const resolveFunction = resultArray => console.log(resultArray)
const rejectFunction = err => console.log(err)

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('I waited 3 seconds'), 3000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('I waited 5 seconds'), 5000)
})

Promise.all([p2, p1]).then(resolveFunction, rejectFunction)

Promise.race([p1, p2]).then(resolveFunction, rejectFunction)

console.log('this will run synchronously')
