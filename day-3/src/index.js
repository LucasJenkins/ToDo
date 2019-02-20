const printMessage = () => console.log('Time to get functional')

const add = (a, b) => a + b

function outer (x) {
  function inner (y) {
    return x + y
  }
  return inner
}

const higherOrder = f => f(50)

console.log(9)

const f = a => {
  let copy = [...a]
  copy.push(50)
  return copy
}

let x = [1, 2, 3, 4, 5]

console.log(x)

let state = {
  color: 'blue',
  header: 'Welcome to the app',
  user: {
    username: 'wmarttala',
    password: 123,
    id: 53
  }
}

const logout = state => ({
  ...state,
  user: {
    username: undefined,
    password: undefined,
    id: undefined
  }
})

let prevState = state

state = logout(state)

console.log(prevState)
console.log(state)

// write a higher-order function that receives a function and an array. Then iterate over the array and store the result of calling the provided function on each value from the array in a new array. Finally, return the new array.
const custom = function (f) {
  const a = []
  for (let i = 0; i < this.length; i++) {
    a.push(f(this[i], i))
  }
  return a
}

Array.prototype.map = custom

const arr = [1, 2, 3, 4, 5]

console.log(arr.map(a => a + 1))
console.log(arr.filter(a => a % 2))
console.log(arr)

console.log([10, 1, 5, 23, 532].map(x => x * 2))

const reduce = (array, f, initialValue) => {
  let accumulator = initialValue
  for (let i = 0; i < array.length; i++) {
    accumulator =
      accumulator !== undefined ? f(accumulator, array[i], i, array) : array[i]
  }
  return accumulator
}

console.log(reduce(arr, (a, b) => a + b, 0))

const reducer = function (acc, value, idx, arr) {
  return [...acc, value + 1]
}

console.log(
  arr.reduce((acc, value, idx, arr, x) => {
    console.log(x)
    return [...acc, value + 1]
  }, [])
)

console.log(arr)

console.log(
  arr.map((a, idx) => {
    console.log(idx)
    return a + 1
  })
)
