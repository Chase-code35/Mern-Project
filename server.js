const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
    
app.use(cors());

app.use(express.json(), express.urlencoded({extended: true}));

require('./server/routes/pirates.routes')(app);

require('./server/config/mongoose.config');

app.listen(port, () => console.log(`Listening on port: ${port}`) );