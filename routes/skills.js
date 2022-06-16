import { Router } from 'express'
// import { route } from 'express/lib/application'
import { skills } from '../data/skills-data.js'

const router = Router()

router.get('/', function(req, res) {
  res.render('skills/index', {
    skills: skills
  })
})

export {
  router
}
