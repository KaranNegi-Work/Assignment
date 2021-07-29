const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const utils = require('./util/utils');
const routes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT;

sequelize.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})

sequelize.sync().then(result => {
    
    //Api Called 
    app.use(express.json());

    app.use(utils.baseURL, routes);
    
    app.use('*', (req, res) => { res.status(404).json('Page not found') });

    app.listen(PORT, () => {
        console.log("\nlistning At port number 3000");
    });
}).catch(err => {
    console.log(err);
});