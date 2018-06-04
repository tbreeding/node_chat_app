require('./config/config');

const PATH = require('path')
const EXPRESS = require('express');

const PUBLIC_PATH = PATH.join(__dirname, '../public');

const APP = new EXPRESS();

const PORT = process.env.PORT;

APP.use('/', EXPRESS.static(PUBLIC_PATH));

APP.listen(PORT, () => {
    console.log(`Started on port ${PORT}`);
});

console.log(__dirname + '/../public');
console.log(PUBLIC_PATH);