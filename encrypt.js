const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let crypto = require('crypto-js');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/AES', (req, res) => {
    const book = req.query.password;

    // const book1 = 

    // Output the book to the console for debugging
    console.log(book);

    randomKey = "DFn1gA0RlQ2SrJyk48fI3H8u0mziy2Tu";
    const key = crypto.AES.encrypt(book, randomKey).toString();
    res.send({'cipherData':key})

});

app.listen(process.env.PORT || 3000);