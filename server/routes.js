const express = require('express')

const router = express.Router()
const fs = require('fs')

router.post('/postArt', (req, res) => {
  fs.writeFile(
    './SavedPictures/' + req.body.artName + '.json',
    JSON.stringify(req.body.art),
    (err) => {
      if (err) {
        console.error(err)
      }
    }
  )
  return res.sendStatus(201)
})

router.get('/getArt/:art', (req, res) => {
  fs.readFile(
    './SavedPictures/' + req.params.art + '.json',
    'utf8',
    function read(err, data) {
      if (err) {
        console.error(err)
      }
      return res.json(JSON.parse(data))
    }
  )
})

module.exports = router
