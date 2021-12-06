const { PORT } = require('./config/secret')
const express = require('express');
const sequelize = require('./config/mysql')
const routes = require('./routes/index.routes')
const {verifyToken} = require("./middlewares/auth");
const cors = require('cors')

const app = express();
const port = PORT;

app.use(cors())
app.use(express.json());
sequelize.sync();

app.use('/api',routes)
app.listen(port, async (request, respond) => {
    console.log(`Server đang chạy ở cổng ${port}.`);
});