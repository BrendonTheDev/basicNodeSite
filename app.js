const express = require("express");

const app = express();

//register view engine
app.set("view engine", "ejs");

// Listen For Requests
app.listen(3000);

//GET "render" home page
app.get("/", (req, res) => {
  res.render("index");
});

//GET "render" about page
app.get("/about", (req, res) => {
  res.render("about");
});

//GET "render" contact page
app.get("/contact", (req, res) => {
  res.render("contact");
});

//404 use "render" 404 page
app.use((req, res) => {
  res.render("404");
});
