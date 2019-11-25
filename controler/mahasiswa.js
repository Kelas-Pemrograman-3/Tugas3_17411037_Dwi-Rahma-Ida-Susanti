const mahasiswaModel = require('../models/mahasiswa')

exports.insertmahasiswa = (data) =>
  new Promise((resolve,reject) => {
    mahasiswaModel.create(data)
      .then(res => {
        resolve({
          error: false,
          pesan: 'Berhasil Input Data'
        })
      })
      .catch(() => {
        reject({
          error: true,
          pesan: 'Gagal Input Data'
        })
      })
  })