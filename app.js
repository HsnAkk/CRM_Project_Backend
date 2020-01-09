const express = require('express');

const app = express();

// BodyParser Middleware
app.use(express.json());


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