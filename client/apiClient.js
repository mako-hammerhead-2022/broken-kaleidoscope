import request from 'superagent'

export function postArt(artArray, name) {
  console.log('api client working')
  return request
    .post('/api/v1/art/postArt')
    .send({ art: artArray, artName: name })
    .then(() => {
      return
    })
}

export function getArt(name) {
  console.log('api client get working', name)
  return request
    .get('/api/v1/art/getArt/' + name)
    .send()
    .then(() => {
      return ['green']
    })
    .catch((error) => {
      console.error(error)
    })
}
