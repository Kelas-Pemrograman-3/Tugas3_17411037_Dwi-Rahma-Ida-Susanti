const server =require('express')()
const port = 5000

let nilai = 50
// let data = {
//     nama: 'Dwi Rahma Ida Susanti',
//     npm:17411037,
//     Prodi: 'Sistem Informasi',

//     kuliah: (namamatakuliah,nama) => {
//         console.log('Selamat Kuliah '+ nama +', dimata kuliah '+namamatakuliah)
//     }
// }
// data.kuliah('Pemrograman III',data.nama)

let listMhs = [
    {
        nama : 'Dwi Rahma Ida Susanti',
        npm: 17411037
    },
    {
        nama: 'Dwi Ida',
        npm:17411010
    }
]
for (let i = 0; i < listMhs.length; i++) {
    console.log(listMhs[i])
    
}
if (nilai > 80) {
console.log('Nilai anda A')    
} else if (nilai > 70) {
    console.log('Nilai anda B')
} else {
    console.log('Nilai Anda C')
}

    




 
server.listen(port, function (){
    console.log('Server started on port' + port) 
})
