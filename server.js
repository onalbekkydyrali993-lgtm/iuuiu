const express = require('express');

const app = express();

// Тапсырмалар массиві
let todos = [
    {
        id: 1,
        title: 'Express-ті үйрену',
        done: false
    }
];

// Порт
const PORT = process.env.PORT || 3000;

// GET /api/hello
app.get('/api/hello', (req, res) => {
    const name = req.query.name;

    if (name) {
        res.status(200).json({
            message: `Сәлем, ${name}!`
        });
    } else {
        res.status(200).json({
            message: 'әлем'
        });
    }
});

// GET /api/hello/:name
app.get('/api/hello/:name', (req, res) => {
    const name = req.params.name;

    res.status(200).json({
        message: `Сәлем, ${name}!`
    });
});

// GET /api/todos
app.get('/api/todos', (req, res) => {
    res.status(200).json(todos);
});

// GET /api/status
app.get('/api/status', (req, res) => {
    res.status(200).json({
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Серверді іске қосу
app.listen(PORT, () => {
    console.log(`Сервер ${PORT} портында іске қосылды`);
});