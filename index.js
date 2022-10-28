const express = require('express');
const cors = require('cors');
const allCourses = require('./Data/courses.json');
const blogs = require('./Data/blogs/blogs.json');

const app = express();
app.use(cors());

app.get('/', (req, res)=>{
    res.send("Server Show in browser");
});

app.get('/courses', (req, res)=>{
    res.send(allCourses);
});

app.get('/blogs', (req, res)=>{
    res.send(blogs);
});

app.get('/courses/:id', (req, res)=>{
    const id = req.params.id;
    const getCourse = allCourses.find(course => course.id == id);
    res.send(getCourse);
})

const Port = process.env.port || 5000;
app.listen(Port, ()=>{
    console.log('Server is Runing on port ' + Port)
})