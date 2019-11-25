const mahasiswa = require('express')()
const mahasiswacontroler = require('../controler/mahasiswa')

mahasiswa.post('/insert', (req,res) => {
  mahasiswacontroler.insertmahasiswa(req.body)
    .then(result => {
      res.json(result)
    }).catch(err => {
      res.json(err)
    })
})

module.exports =  mahasiswa