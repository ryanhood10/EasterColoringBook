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

    const mcData = {
        members: [
            {
                email_address: email,
                status: 'subscribed'
            }
        ]
    }

    const mcDataPosts = JSON.stringify(mcData);

    const options = {
        url: '',
        method: 'POST',
        headers: {
            Authorization: 'auth ..'
        },
        body: mcDataPosts
    }

    if(email){
        //successful so far
    } else {
        res.status(404).send({message: 'Failed'})
    }
})

const PORT = process.env.PORT || 8800;

app.listen(PORT, console.log('server started!'))