const router = require('express').Router()
const db = require('../db/db.json')
const fs = require('fs');

router.get("/notes", (req, res)=>{
    console.log('DeeAnn is awesome')
    res.json(db)
})

router.post("/notes", (req, res)=>{
    console.log(req.body)
    db.push(req.body)
    fs.writeFile("./db/db.json", JSON.stringify(db), err => err)
    res.json(db)
})

router.delete("/notes/:id", (req, res)=>{
    console.log(req.params)
    db.splice(req.params.id-1, 1)
    fs.writeFile("./db/db.json", JSON.stringify(db), err => err)
    res.json(db)
})

//if length is longer than db then response.json("that is not a valid id")





module.exports = router