var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var ejs = require("ejs");

var app = express();
const cors = require("cors");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/images", express.static("images"));
app.use(cors());


// Routers
app.use("/animals", require("./routes/AnimalsRouter"));
app.use("/cars", require("./routes/CarsGallery"));
app.use("/gallery", require("./routes/GalleryRouter"));
app.use("/celebrities", require("./routes/CelebritiesRouter"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const port = 3001;
function onListening() {
  console.log(`Server Listening => http://localhost:${port} `);
}

app.listen(port, onListening);
