const express = require("express");
const cors = require("cors");
const mongoDb = require("mongodb");
const bodyparser = require("body-parser");

const app = express();
const mClient = mongoDb.MongoClient;
const dbUrl = "mongodb+srv://admin:admin@mycluster.zvdho.mongodb.net/mern-db?retryWrites=true&w=majority";
const ObjectId = mongoDb.ObjectId;
app.use(cors());
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: false
}));

app.get("/getEmployees", (req, res) => {
    mClient.connect(dbUrl, (err, connection) => {
        if (err) throw err;
        else {
            const db = connection.db("mern-db")
            db.collection("employees").find().toArray((err, resData) => {
                if (err) throw err;
                else {
                    res.send(resData);
                }
            })
        }
    });
});

app.get("/employee/:id", (req, res) => {
    mClient.connect(dbUrl, (err, connection) => {
        if (err) throw err;
        else {
            const db = connection.db("mern-db")
            try {
                db.collection("employees").find({
                    "_id": new ObjectId(req.params.id)
                }).toArray((err, resData) => {
                    if (err) throw err;
                    else {
                        if (resData.length > 0) {
                            res.send(resData[0]);
                        } else {
                            res.send({
                                message: "Product Not Available"
                            })
                        }
                    }
                })
            } catch (error) {
                res.send({message:"invalid product"});
            }
        }
    });

});
app.post("/addEmployee", (req, res) => {
    let resObj = {
        "id": req.body.id,
        "fullName": req.body.fullName,
        "email": req.body.email,
        "mobile": req.body.mobile,

    };
    mClient.connect(dbUrl, (err, connection) => {
        if (err) throw err;
        else {
            let db = connection.db("mern-db");
            db.collection("employees").insertOne(resObj, (err, Result) => {
                if (err) throw err;
                else {
                    res.status(200).json({
                        insert: "successfully inserted "
                    });
                }
            })
        }
    })
})
app.put("/editEmployee", (req, res) => {
    resOb = {
        "mobile": req.body.mobile,
        "email": req.body.email
    }
    mClient.connect(dbUrl, (err, connection) => {
        if (err) throw err;
        else {
            let db = connection.db("mern-db");
            db.collection("employees").updateOne({
                "id": req.body.id
            }, {
                $set: resOb
            }, (err, result) => {
                if (err) throw err;
                else {
                    res.send({
                        update: "success"
                    })
                }
            })
        }
    })
})
app.delete("/deleteEmployee", (req, res) => {
    mClient.connect(dbUrl, (err, connection) => {
        if (err) throw err;
        else {
            let db = connection.db("mern-db");
            db.collection("employees").deleteOne({
                "id": req.body.id
            }, (err, response) => {
                if (err) throw err;
                else {
                    res.send({
                        delete: "success"
                    });
                }

            })
        }
    })
})
app.listen(8080, () => {
    console.log("serevr started successfully....");
});