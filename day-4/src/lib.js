// id: a -> a
export const id = a => a

// Composition of 2 functions
// comp2: (f: b -> c, g: a -> b) -> x: a -> f(g(x))
export const comp2 = (f, g) => x => g(f(x))

// compose: (...funcs) -> composition of all functions
export const compose = (...funcs) => funcs.reduce(comp2, id)

// uncurry: (f: a -> (...*) -> c) -> (a, ...*) -> c
export const uncurry = f => (x, ...args) => f(x)(...args)

// cond: (f: a -> boolean, g: a -> b, h: a -> c) -> a -> b | c
export const cond = (f, g, h) => (...a) => (f(...a) ? g(...a) : h(...a))
