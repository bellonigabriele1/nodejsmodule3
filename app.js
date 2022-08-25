const express = require('express');

const app = express(); 

app.use('/', (req, res, next) => {
    console.log('in mw2');
    res.send('<h1>hello</h1>');
});

app.listen(3000);

