const express = require('express');
const cors = require('cors');
const allCourses = require('./Data/courses.json');


const app = express();
app.use(cors());

app.get('/', (req, res)=>{
    res.send("Server Show in browser");
});

app.get('/courses', (req, res)=>{
    res.send(allCourses);
})

const Port = process.env.port || 5000;
app.listen(Port, ()=>{
    console.log('Server is Runing on port ' + Port)
})