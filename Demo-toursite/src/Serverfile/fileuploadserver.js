const express = require('express');
const app = express();
const path = require("path");
const multer = require("multer");
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: function (req, file, cb) {
        cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
}).single("myImage");


app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        console.log("Request ---", req.body);
        console.log("Request file ---", req.file);//Here you get file.
        /*Now do where ever you want to do*/
        if (!err) {
            let imagePath = path.join(__dirname, './public/uploads/') + req.file.filename;
            // console.log(path.join(__dirname, './public/uploads/')  + req.file.filename);
            return res.status(200).send({ "upload": imagePath });
        }
        else {
            return res.status(500).send({ "upload": "fail" });
        }
    });
})

app.listen(3002, () => {
    console.log("3002 server running");
});

