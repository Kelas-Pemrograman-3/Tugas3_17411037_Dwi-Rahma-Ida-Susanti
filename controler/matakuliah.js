const matakuliahModel = require('../models/matakuliah')

exports.insertmatakuliah = (data) =>
  new Promise((resolve,reject) => {
    matakuliahModel.create(data)
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