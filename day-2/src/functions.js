function Person () {
  this.age = 0
  let self = this

  for (let argument of arguments) {
    console.log(`Arg: ${argument}`)
  }

  setInterval(() => {
    console.log(this)
    this.age++
  }, 1000)
}

const p = new Person(1, 2, 3, 4, 5, 6, 7)

console.log(p.age)

setInterval(function logAge () {
  console.log(p.age)
}, 1000)

function square (number) {
  console.log(arguments)
  return number * number
}

const square = (number, ...args) => {
  console.log(args)

  return number * number
}

console.log(square(42, 1, 2, 3, 4, 5))

const object = {
  x: 5
}

// Closure
function outer (x) {
  function inner (y) {
    function innerinner (z) {
      return x + y + z
    }

    return innerinner
  }

  function inner2 (y) {
    console.log('hello')
  }

  object.x === 6 ? inner : inner2
}

const add2 = outer(2)
const add3 = outer(3)
const increment = outer(1)

const add7 = add2(5)

console.log(add7(10))
