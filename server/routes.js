const express = require('express')

const router = express.Router()
const fs = require('fs')

router.post('/postArt', (req, res) => {
  fs.writeFile(
    './SavedPictures/' + req.body.artName + '.js',
    'const ' + req.body.artName + ' = ' + JSON.stringify(req.body.art),
    (err) => {
      if (err) {
        console.error(err)
      }
    }
  )
  return res.sendStatus(201)
})

router.get('/getArt/:art', (req, res) => {
  console.log(req.params.art)
  console.log('./SavedPictures/' + req.params.art + '.js')

  fs.readFile(
    './SavedPictures/' + req.params.art + '.js',
    'utf8',
    function read(err, data) {
      if (err) {
        console.error(err)
      }
      console.log(data)

      return data
    }
  )
})

module.exports = router
