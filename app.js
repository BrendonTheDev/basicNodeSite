const express = require("express");

const app = express();

// Listen For Requests
app.listen(3000);

//register view engine
app.set("view engine", "ejs");
