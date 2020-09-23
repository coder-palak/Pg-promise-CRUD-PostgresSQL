const express = require('express');
const app = express();
const cors = require('cors');



app.use(cors());
app.use(express.json());
app.use('/api/users',require('./router/user.router'))

const port = process.env.PORT || 3000;



app.listen(port, () => { console.log(`Started on PORT ${port}`) });