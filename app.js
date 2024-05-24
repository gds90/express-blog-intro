require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const { posts } = require("./controllers/posts.js");

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('<h1>Benvenuto nel mio blog</h1>');
})

app.get('/posts', posts);

app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});