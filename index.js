const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courseDetails = require('./data/courseDetails.json');

app.get('/', (req, res) => {
    res.send('Courses API Running');
});

app.get('/courses-categories', (req, res) => {
    res.send(categories)
});

app.get('/course-details/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news);
    }
    else {
        const selectedCourse = courseDetails.find(n => n._id === id);
        res.send(selectedCourse);
    }
})

// app.get('/category/:id', (req, res) => {
//     const id = req.params.id;

//     if (id === '08') {
//         res.send(news);
//     }
//     else {
//         const categoryNews = news.filter(n => n.category_id === id);
//         res.send(categoryNews);
//     }

// });


app.listen(port, () => {
    console.log('Tutor me Server running on port', port);
})