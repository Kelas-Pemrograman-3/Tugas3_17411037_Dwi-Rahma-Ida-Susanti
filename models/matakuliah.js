const mongoose = require('mongoose')
const Schema = mongoose.Schema

const matakuliahSchema = new Schema({
  kodematakuliah: {
    type: String
  },
  namamatakuliah: {
    type: String
  }
})

module.exports = mongoose.model('matakuliah', matakuliahSchema)