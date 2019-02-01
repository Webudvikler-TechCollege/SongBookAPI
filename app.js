const express = require('express');
const app = express();

const songRouter = require('./routes/songRoutes');
const port = process.env.PORT || 4000;

app.use('/api/songs', songRouter); 

app.listen(port, () => {
    console.log('App is running...');
});