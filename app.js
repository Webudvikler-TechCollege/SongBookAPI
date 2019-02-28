const express = require('express');
const app = express();

const song = require('./models/song');
const port = process.env.PORT || 4000;

//Sæt port
app.set('port', port);
//Sæt view directory (__dirname => DOCUMENT_ROOT)
app.set('views', __dirname + '/views');
//Angiver view engine til ejs
app.set('view engine', 'ejs');

//Angiver statiske dirs til scripts, css og lign.
app.use(express.static(__dirname + '/'));

//Inkludere router til sange
require('./routes/song')(app);

//Angiver en listener på port 4000
app.listen(port, () => {
    console.log(`Express server started http://localhost:${port}`);
});