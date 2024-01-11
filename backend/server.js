const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bloggers"
})

app.get('/', (re,res)=>{
    // connect to database
        db.connect((err) => {
            if (err) {
                throw err;
            }
            console.log('Connected to database');
            // return res.json("From Backend");
        });
        // return res.json("From Backend");
})

app.listen(8081,()=>{
    console.log('listening');
})
