const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.urlencoded({extended : true}));
 app.use(express.json())

app.get('/',(req,res) => {
     res.send()
})


// task
// status

app.get('/',(req,res) => {
    res.send('Welcome to homepage');
})
app.post('/',(req,res) => {
    fs.readFile('./db.json','utf8', (error,data) => {
        const parsed = JSON.parse(data);
        parsed.works = [...parsed.works,req.body];
        fs.writeFile('./db.json',JSON.stringify(parsed),() => {
            console.log('file writing done')
        })
        res.end('created the schedule')
       
    })
})






app.listen('8080',(req,res) => {
    console.log('server is  started on http://localhost:8080');
})

