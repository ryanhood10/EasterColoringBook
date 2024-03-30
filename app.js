const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//middleware
app.use(cors({
    origin: 'https://creativecoloring.io' // Allow requests from this origin
  }));
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
        url: 'https://us22.api.mailchimp.com/3.0/lists/343852a974', // 343852a974
        method: 'POST',
        headers: {
            Authorization: 'auth fc7ea92f05c2674a1268b5982ce4b2c7' //us22
        },
        body: mcDataPosts
    }

    if(email){
        request(options, (err, response, body) => {
            if(err) {
                res.json({error: err})
            } else {
                if (js){
                    res.sendStatus(200);
                } else {
                    res.redirect('/success.html')
                }
            }
        })
    } else {
        res.status(404).send({message: 'Failed'})
    }
})

const PORT = process.env.PORT || 8800;

app.listen(PORT, console.log('server started!'))