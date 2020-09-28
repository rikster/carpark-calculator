// import syntax requires babel for es6 interpretation
const express = require("express");
const app = express();

//you can send html, json, files, etc
app.get("/", (req, res) => res.send("Welcome to The Contact Calculator"));
app.get("/welcome", (req, res) =>
  res.json({ msg: "Welcome to the Carpark Calculator" })
);

//Define Routes in other dires/files
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users.js", require("./routes/users"));
//app.use('/api/normal', require('./routes/normal'));
//app.use('/api/special', require('./routes/special'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
