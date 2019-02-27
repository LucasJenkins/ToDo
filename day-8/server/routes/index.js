import { Router } from 'express'
import axios from 'axios'
import validate from 'express-validation'
import token from '../config/token'

const UNSPLASH_API = `https://api.unsplash.com/`

export default () => {
  let router = Router()

  /** GET /health-check - Check service health */
  router.get('/health-check', (req, res) => res.send('OK'))

  /**
   * GET /photos - Get a random set of 10 photos from the Unsplash API and return
   * only their URLs to the user.
   */
  router.get('/photos', (req, res) => {
    axios
      .get(`${UNSPLASH_API}/photos?page=${Math.floor(Math.random() * 20)}`, {
        headers: {
          Authorization: token
        }
      })
      .then(({ data }) => data)
      .then(photos => photos.map(p => p.urls.regular))
      .then(urls => res.json(urls))
  })

  return router
}
