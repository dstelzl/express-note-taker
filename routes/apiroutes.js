const router = require('express').Router()
const db = require('../db/db.json')
const fs = require('fs');

router.get("/notes", (req, res)=>{
    
    res.json(db)
})

router.post("/notes", (req, res)=>{
   
    db.push(req.body)
    fs.writeFile("./db/db.json", JSON.stringify(db), err => err)
    res.json(db)
})

router.delete("/notes/:id", (req, res)=>{
    db.splice(req.params.id-1, 1)
    fs.writeFile("./db/db.json", JSON.stringify(db), err => err)
    res.json(db)
})







module.exports = router