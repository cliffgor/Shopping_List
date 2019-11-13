const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

const items = require('./routes/api/items');

const app = express();

// Bodyparser Midlewear
app.use(bodyParser.json());

// DB config

const db = require("./config/keys").mongoUri;
console.log(db)
// connecting to mongo db
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected....'))
    .catch(err => console.log(err));

// Use Routes

app.use('/api/items', items);


    const port = process.env.PORT ||5000;

app.listen(port,() => console.log(`Server started on port ${port}`));




