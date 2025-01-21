const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

// サーバースタート
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
