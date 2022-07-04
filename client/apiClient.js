import request from 'superagent'

export function postArt(artArray) {
  console.log('api client working')
  return request
    .post('/api/v1/art/postArt')
    .send({ art: artArray })
    .then(() => {
      return
    })
}

export function getArray() {
  console.log('api client get working')
  return request
    .get('/api/v1/art/getArt')
    .send({ art: artArray })
    .then(() => {
      return
    })
}
