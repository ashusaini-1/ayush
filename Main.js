// server.js

const express = require('express');
const app = express();
const path = require ('path');
const sendQuery=require("./routes")

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'Script')));

// Define routes for different pages

// Home page
app.get('/', (req, res) => {
    res.render('index');
});


// Contact page
app.get('/contact.html', (req, res) => {
    res.render('contact');
});

app.get('*', (req, res) => {
    res.render('index');
});

app.use("/api",sendQuery)


// Start the Express server
const port = process.env.port || 3030;
app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}/`);
});