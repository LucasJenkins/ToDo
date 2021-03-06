import { Router } from 'express'
import axios from 'axios'
import validate from 'express-validation'
import token from '../../token'
import getUser from '../lib/getUser'

import validation from './validation'

const GITHUB_URL = 'https://api.github.com'

export default () => {
  let router = Router()

  /** GET /health-check - Check service health */
  router.get('/health-check', (req, res) => res.send('OK'))

  // The following is an example request.response using axios and the
  // express res.json() function
  /** GET /api/rate_limit - Get github rate limit for your token */
  router.get('/rate', (req, res) => {
    axios
      .get(`${GITHUB_URL}/rate_limit`, {
        headers: {
          Authorization: token
        }
      })
      .then(({ data }) => res.json(data))
  })

  /** GET /api/user/:username - Get user */
  router.get('/user/:username', validate(validation.user), (req, res) => {
    console.log(req.params)
    return getUser(req.params.username)
      .then(user => res.json(user))
      .catch(err => console.log(err))
  })

  /** GET /api/users? - Get users */
  router.get('/users/', validate(validation.users), (req, res) => {
    console.log(req.query)
    return Promise.all(req.query.username.map(getUser))
      .then(users => res.json(users))
      .catch(err => res.status(400).json({ message: err.message }))
  })

  return router
}
