const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const passesRoute = require("./app/routes/passesRoutes");
const usersRoute = require("./app/routes/usersRoutes");
const router = express.Router();
const properties = require('./app/config/db.config');
const DB = require('./app/config/db');
app.use(cors());
app.use(router);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);
passesRoute(router);
usersRoute(router);
app.get('/', (req, res) => {
    res.sendStatus(200);
});
DB();
app.listen(properties.PORT, () => {
    console.log(`Escuchando el puerto: ${properties.PORT}`)
});
