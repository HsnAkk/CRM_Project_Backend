const express = require('express');
const config = require('config');
const mongoose = require('mongoose');


const app = express();

// BodyParser Middleware
app.use(express.json());

// DB Config
const db = config.get('mongoURI');

// connect to Mongo
mongoose.connect(db, {
                        useNewUrlParser: true,
                        useCreateIndex: true,
                        useUnifiedTopology: true
                    })
                    .then( () => console.log('MongoDB connected...'))
                    .catch( err => console.log(err));


app.get('/', (req, res) => {
    res.json({ message: 'Hallo world'});
});

app.post('/register', (req, res) => {
    const { userName, pass } = req.body;
    res.json({
        userName,
        pass,
        statusCode: 200,
        status: 'Successed',
        date: new Date().toLocaleString()
    })
});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));