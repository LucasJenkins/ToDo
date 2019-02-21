import { cond, id, uncurry, compose } from './lib'

const arrayLengthLessThanEqualTo = v => array => array.length <= v

// shuffle: [a] -> [a]
const shuffle = array =>
  array.reduce(
    (acc, currValue) =>
      acc.splice(Math.floor(Math.random() * (acc.length + 1)), 0, currValue) &&
      acc,
    []
  )

const grabNumItems = (array = []) => numItems =>
  [...array].splice(
    0,
    numItems <= array.length && numItems > 0
      ? numItems
      : Math.ceil(Math.random() * array.length)
  )

// chooseRandom: (array: [a], numItems: number) -> [a]
export const chooseRandom = cond(
  arrayLengthLessThanEqualTo(1),
  id,
  uncurry(
    compose(
      shuffle,
      grabNumItems
    )
  )
)
