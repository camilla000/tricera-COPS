const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

const app = express();

app.use((req, res) => {
  //the paths goes here?
  //prints this in the console if works
  console.log("THAT RACIST ASIAN JOKE YOU CAN'T USE!!")
  res.send('<h1> fhagbhjusgfhjusfghjahj</h1>');
});

app.listen(3000, () => {
  // return this is port 3000 is listening 
  console.log("DIS SHIT WORK, BEATCH!!");
  
});

// var corsOptions = {
//   origin: "http://localhost:8081",
// };

// app.use(cors(corsOptions));



// // parse requests of content-type - application/json
// app.use(bodyParser.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to this shit." });
// });

// // set port, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });
