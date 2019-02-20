let a = 1
let b = 2
let c = 3

const obj = {
  a,
  b,
  c
}

console.log(obj)

function createObject (username, userid) {
  return {
    [username]: userid
  }
}

console.log(createObject('wmarttala', 50))

obj.d = 4
obj.e = 28104781290

console.log(obj)

const obj2 = {
  ...obj,
  e: 5,
  f: 6,
  g: 7
}

obj2.e = 9

console.log(obj)
console.log(obj2)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function f (a, b, c, d, e) {
  return a + b + c + d + e
}

console.log(arr)

const object = {
  a: 1,
  b: 2,
  c: 3
}

console.log(Object.entries(object)) // array of arrays representing key value pairs

console.log(Object.keys(object)) // returns an array respresenting the keys of the object

console.log(Object.values(object))

// Destructuring
const obj3 = {
  a: 1,
  b: 2,
  c: 3
}

const arr3 = [1, 2, 3, 4, 5]

let { d1 } = obj3

let [, , , a1, b1] = arr3

console.log(a1)
console.log(b1)
