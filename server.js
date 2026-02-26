const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`run...`);
    console.log(`http://localhost:${PORT}`);
});