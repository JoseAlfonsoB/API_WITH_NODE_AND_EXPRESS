import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("This is my first project with Express!");
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});