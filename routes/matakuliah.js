const matakuliah = require('express')()
const matakuliahcontroler = require('../controler/matakuliah')

matakuliah.post('/insert', (req,res) => {
  matakuliahcontroler.insertmatakuliah(req.body)
    .then(result => {
      res.json(result)
    }).catch(err => {
      res.json(err)
    })
})

module.exports =  matakuliah