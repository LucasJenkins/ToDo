import generateTitles from './generateTitles'
import getFavoriteLanguage from './getFavoriteLanguage'

const grabItem = object => string => object[string]

const example = a => b => c => d => a + b + c + d

const e1 = example(1) // b => c => d => 1 + b + c + d
const e2 = e1(4) // c => d => 1 + 4 + c + d
const e3 = e2(7) // d => 1 + 4 + 7 + d
e3(10) // 22

const getTotalStars = repos =>
  repos.reduce((acc, f) => acc + f('stargazers_count'), 0)

const getHighestStarred = repos =>
  repos.reduce(
    (acc, f) => (acc < f('stargazers_count') ? f('stargazers_count') : acc),
    0
  )

const getPerfectRepos = arr =>
  arr.reduce((acc, f) => (!f('open_issues_count') ? acc + 1 : acc), 0)

const refineUser = (
  {
    login,
    name,
    email,
    location,
    bio,
    avatar_url,
    public_repos,
    followers,
    following
  },
  repos
) => {
  const repoFunctions = repos.map(grabItem)
  return {
    username: login,
    name,
    email,
    location,
    bio,
    'avatar-url': avatar_url,
    titles: generateTitles({ following, followers }, repoFunctions),
    'favorite-language': getFavoriteLanguage(repoFunctions),
    'public-repos': public_repos,
    'total-stars': getTotalStars(repoFunctions),
    'highest-starred': getHighestStarred(repoFunctions),
    'perfect-repos': getPerfectRepos(repoFunctions),
    followers,
    following
  }
}

export default refineUser
