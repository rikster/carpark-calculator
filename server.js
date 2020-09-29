// import syntax requires babel for es6 interpretation
const express = require('express');
const app = express();

//you can send html, json, files, etc
app.get('/', (req, res) => res.send('Welcome to The Contact Calculator'));
app.get('/welcome', (req, res) =>
  res.json({ msg: 'Welcome to the Carpark Calculator' })
);

//Parms test
app.get('/test/:id', (req, res) =>
  //res.json({ msg: 'Tests params' });
  res.send(req.params)
);

//Define Routes in other dirs/files
app.use('/api/auth', require('./routes/auth'));
app.use('/api/standard-price-list', require('./routes/standardPriceList'));
app.use('/api/standard-calc-price', require('./routes/standardCalcPrice'));
app.use('/api/special', require('./routes/special'));
//app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
