const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");
const fileUpload = require("express-fileupload");
const pagesRoutes = require("./routes/pages.route");
require("dotenv").config()


const port = 3000;

// express app
const app = express();

app.listen(port, () => console.log(`Server is running on port ${port}`));

// Mongo DB connection
const mongoose = require("mongoose");

const dbConnection = process.env.dbConnection

mongoose.connect(dbConnection).then(() => 
    {
        console.log("Connected to the database!");
    }).catch(() =>
    {
        console.log("Connection fails!");
    })
  

// register view engine and middlewares and static files
app.use(expressLayouts)
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true}))
app.use(methodOverride("_method"))
app.use(express.static("public"))
app.use(fileUpload());


app.use ((req, res, next) => {
    res.locals.url = req.originalUrl;
    res.locals.host = req.get('host');
    res.locals.protocol = req.protocol;
    next();
});


// All pages routes
app.use(pagesRoutes);

