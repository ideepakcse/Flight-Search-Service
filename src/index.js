const express=require('express');

const {ServerConfig} = require('./config');

const db = require('./models');

const apiRoutes=require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Server started at ${ServerConfig.PORT}`);
    //db.sequelize.sync({alter: true});
});




