const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/subscribe', (req, res) => {
    const { email,js } = req.body;
    console.log(req.body);
})

const PORT = process.env.PORT || 8800;

app.listen(PORT, console.log('server started!'))