import db from './fakedb'
import { comp2 } from './lib'
import { chooseRandom } from './chooseRandom'

console.log('Currying and Composition')

/* *************************************************** */
// Basic example of composition
/* *************************************************** */

// const addExclamation = s => `${s}!`
// const makeUpper = s => s.toUpperCase()

// const shout = comp2(makeUpper, addExclamation)

// console.log(shout('Do you get that?'))

// console.log(makeUpper(addExclamation('Do you get that?')))

/* --------------------------------------------------- */

/* *************************************************** */
// Currying and composition
/* *************************************************** */

// const setDb = database => target => database.get(target)

// const grabFromStudentDb = setDb(db)

// const getValues = comp2(Object.values, grabFromStudentDb)

// const logStudent = student =>
//   `Student(Firstname: ${student.firstname}, Lastname: ${student.lastname})`

// const logStudents = () => getValues('students').map(logStudent)

// console.log(logStudents())

/* --------------------------------------------------- */

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [
  'Will',
  'Ryan',
  'Nate',
  'Sush',
  'Steven',
  'Tyler',
  'Lucas',
  'Chrys'
]
const arr3 = [[1, 2, 3], [5, 4, 3], [9, 0, 3], [7, 5, 1]]

console.log(chooseRandom(arr1))
console.log(chooseRandom(arr1, -3))

console.log(chooseRandom(arr2, 5))
console.log(chooseRandom(arr2, 50))

console.log(chooseRandom(arr3, 2))
