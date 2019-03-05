import axios from 'axios'
import token from '../../token'

import refineUser from './refineUser'

const GITHUB_URL = 'https://api.github.com'

const getUser = username =>
  Promise.all([
    axios.get(`${GITHUB_URL}/users/${username}`, {
      headers: {
        Authorization: token
      }
    }),
    axios.get(`${GITHUB_URL}/users/${username}/repos`, {
      headers: {
        Authorization: token
      }
    })
  ]).then(([{ data: user }, { data: repos }]) => refineUser(user, repos))

export default getUser
