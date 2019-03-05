export const id = a => a

const comp2 = (f, g) => x => f(g(x))

const compose = (...funcs) => funcs.reduce(comp2, id)

const getMax = obj =>
  Object.keys(obj).reduce(
    (acc, key) => (!obj[acc] || obj[key] > obj[acc] ? key : acc),
    ''
  )

export const getLanguages = repos => repos.map(f => f('language')).filter(id)

const getLanguageValues = repos =>
  repos.reduce(
    (acc, language) => ({
      ...acc,
      [language]: acc[language] ? acc[language] + 1 : 1
    }),
    {}
  )

const getTopLanguage = compose(
  getMax,
  getLanguageValues
)

const getFavoriteLanguage = compose(
  getTopLanguage,
  getLanguages
)

export default getFavoriteLanguage
