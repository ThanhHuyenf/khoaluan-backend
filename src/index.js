const { PORT } = require('./config/secret')
const express = require('express');
const sequelize = require('./config/mysql')
const User = require('./models/user.model')

const app = express();
const port = PORT;

app.use(express.json());
sequelize.sync();

app.listen(port, async (request, respond) => {
    console.log(`Server đang chạy ở cổng ${port}.`);
});