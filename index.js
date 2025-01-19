// variable express berisi memanggil library express yang sudah diinstal
const express = require("express");
const { default: helmet } = require("helmet");

// variable app berisi membuat objek express, untuk mengatur server, mendefinisikan rute dan mengelola middleware
const app = express();

app.use(cors());
app.use(helmet)

// aplikasi gunakan express json
app.use(express.json());
// aplikasi rute tipe dapatkan, jika user di url awal maka ada parameter req untuk mengirim request dan res untuk mengirim response
app.get("/", (req, res) => {
    // kirimkan response berupa json
    res.json({
        // kunci message dengan nilai Hello, from the server
        message: "Hello, from the server"
    });
})

// aplikasi.dengarkan(proses.env.port) artinya panggil .env lalu panggil PORT di dalamnya
app.listen(process.env.PORT, () => {
    // cetak pesan berikut jika port berjalan
    console.log("server berjalan")
})