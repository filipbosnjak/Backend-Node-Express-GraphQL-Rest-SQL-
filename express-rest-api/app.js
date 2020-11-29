const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

const productRoutes = require("./api/routes/products");
const ordersRoutes = require("./api/routes/orders");

// app.get("/", (req, res, next) => {
//   res.status(200).json({
//     message: "Hello world!",
//   });
// });

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Fixing CORS errors - no client from a different server is allowed to use our api

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); //Allow acces from all (*) origins
  res.header("Access-Control-Allow-Headers", "*"); //What is allowed to be in headers

  if (req.method === "OPTIONS") {
    //Browser always sends options req first to see which methods are allowed
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
    return res.status(200).json({});
  }
  next(); //Without this we are blocking the rest of the routes
});
app.use("/products", productRoutes);
app.use("/orders", ordersRoutes);

//Handling errors, 404 etc -> here are passed all the routes that werent matched up

app.use((req, res, next) => {
  const error = new Error("Error :/");
  error.status(404);
  next.use(error);
  res.status(404).json({
    message: "404",
  });
});

app.use((error, req, res, next) => {
  //Here we handle the rest of the unhandled errors - database errors etc
});
module.exports = app;
