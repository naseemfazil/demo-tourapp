
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');


// import all blueprint(model) file in server file
// const muserdemo = require('./muserdemo');
// entha line namala kudukuratu
const mplaces = require('./madmin');
//next form loginku
const mlogin = require('./mlogin');
//nxt registerku
const mregister = require('./mregister');
const mAdmin = require('./madmin');




app.use(bodyParser.json());
app.use(cors());

//db connection 
//port = 27017
//db name = tour
mongoose.connect("mongodb://localhost:27017/tour", { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        console.log("DB not connected...")
        console.log(err)
    } else {
        console.log("DB connected...")
    }
});

// setting photo storagge folder and photo name
const store = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/')
    },
    filename: (req, file, callback) => {
        callback(null, Date.now());
    }
})

var upload = multer({
    storage: store, limits: {
        fileSize: 1024 * 1024 * 5 //5mb
    }
}).single('file');


// server starting point
app.listen(3001, () => {
    console.log("Server started at 3001");
});

app.get('/', function (req, res) {
    console.log("api hit")
    res.status(200).send({ "hello": "from server" });
});

app.post('/saveUser', function (req, res) {

    let reqUserData = {
        "name": "hello",
        "email": "hello@gmail.com"
    }

    let newUserDemo = new muserdemo(req.body);
    // let newUserDemo = new muserdemo(reqUserData);
    newUserDemo.save(function (saveErr, saveDocs) {
        if (saveErr) {
            console.log("error")
            console.log(saveErr)
            res.status(500).send({ "save": "failed" });
        } else {
            console.log("save succ")
            console.log(saveDocs);
            res.status(200).send({ "save": "success" });
        }
    });
});

// api

app.get('/getAllUser', function (req, res) {
    muserdemo.find({}, {}, {}, function (err, docs) {
        if (err) {
            console.log("error")
            console.log(err)
            res.status(500).send({ "save": "failed" });
        } else {
            console.log("save succ")
            console.log(docs);
            res.status(200).send({ "save": docs });
        }
    });
});

//create new api for saving place (from react)
app.post('/savePlace', function (req, res) {
    console.log(req.body);
    let newPlace = new mplaces(req.body);
    newPlace.save(function (saveErr, saveDocs) {
        if (saveErr) {
            res.status(500).send({ "code": "fail" })
            console.log(saveErr)
        } else {
            res.status(200).send({ "code": "succ" })
            console.log(saveDocs)
        }
    })
})

// photo upload api
app.post('/uploads', function (req, res) {
    console.log(req.file);
    upload(req, res, function (err) {
        if (err) {
            console.log("error occured at upload");
            console.log(err);
            return res.status(500).send({ "upload": "fail" })
        } else {
            console.log("in else");
            console.log(req.file);
            return res.status(200).send({ "upload": req.file.filename });
        }
    });
});

// nxt formku pnurom loginku

app.post('/saveLogin', function (req, res) {
    console.log(req.body);
    let newlogin = new mlogin(req.body);
    newlogin.save(function (saveErr, saveDocs) {
        if (saveErr) {
            res.status(500).send({ "code": "fail" })
            console.log(saveErr)
        } else {
            res.status(200).send({ "code": "succ" })
            console.log(saveDocs)
        }
    })
})

//nxt registerku
app.post('/saveRegister', function (req, res) {
    console.log(req.body);
    let newregister = new mregister(req.body);
    newregister.save(function (saveErr, saveDocs) {
        if (saveErr) {
            res.status(500).send({ "code": "fail" })
            console.log(saveErr)
        } else {
            res.status(200).send({ "code": "succ" })
            console.log(saveDocs)
        }
    })
})

//getku registerku

app.get('/getRegister', function (req, res) {
    mregister.find({}, {}, {}, function (err, docs) {
        if (err) {
            console.log("error")
            console.log(err)
            res.status(500).send({ "save": "failed" });
        } else {
            console.log("save succ")
            console.log(docs);
            res.status(200).send({ "save": docs });
        }
    });
});

//get loginku

app.get('/getLogin', function (req, res) {
    mlogin.find({}, {}, {}, function (err, docs) {
        if (err) {
            console.log("error")
            console.log(err)
            res.status(500).send({ "save": "failed" });
        } else {
            console.log("save succ")
            console.log(docs);
            res.status(200).send({ "save": docs });
        }
    });
});



//get adminku


app.get('/getAdmin', function (req, res) {
    mAdmin.find({}, {}, {}, function (err, docs) {
        if (err) {
            console.log("error")
            console.log(err)
            res.status(500).send(err);
        } else {
            console.log("save succ")
            console.log(docs);
            res.status(200).send( docs );
        }
    });
});

