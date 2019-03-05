import { id, getLanguages } from './getFavoriteLanguage'

const isForker = repos => {
  const forks = repos.map(f => f('parent')).filter(id)
  return repos.length / 2 <= forks.length
}

const isOneTrickPony = repos => {
  const languages = getLanguages(repos)
  return languages.length === 1
}

const isJackOfAllTrades = repos => {
  const languages = getLanguages(repos)
  return languages.length >= 10
}

const isStalker = user => user.following >= user.followers * 2

const isMrPopular = user => user.followers >= user.following * 2

const generateTitles = (user, repoFuncs) =>
  [
    isForker(repoFuncs) ? 'forker' : '',
    isOneTrickPony(repoFuncs) ? 'One-Trick Pony' : '',
    isJackOfAllTrades(repoFuncs) ? 'Jack of all Trades' : '',
    isStalker(user) ? 'Stalker' : '',
    isMrPopular(user) ? 'Mr. Popular' : ''
  ].filter(id)

export default generateTitles
