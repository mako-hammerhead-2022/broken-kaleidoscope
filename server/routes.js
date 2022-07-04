const express = require('express')

const router = express.Router()
const fs = require('fs')

router.post('/postArt', (req, res) => {
  console.log(req.body)

  fs.appendFile(
    './SavedPics.js',
    ',[' + JSON.stringify(req.body.art) + ']',
    (err) => {
      if (err) {
        console.error(err)
      }
    }
  )
  return res.sendStatus(201)
})

module.exports = router
