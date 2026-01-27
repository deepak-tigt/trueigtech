const express = require("express");
const app = express();
const port = 4000;

// cutom middleware
// middleware - logging,auth,validaion

// order of the middleware is very important

const loggingMiddleware = function (rq, res, next) {
  console.log("logging... ");
  next(); // to pass the control to the next
};
//loading the coustom middle ware
app.use(loggingMiddleware);

const authMiddleware = function (req, res, next) {
  console.log("auth...");
  next();
};
app.use(authMiddleware);

const validationMiddleware = function (req, res, next) {
  console.log("validation...");
  next();
};
app.use(validationMiddleware);

app.get("/", (req, res) => {
  console.log("route handler...");

  console.log(req.body);
  res.send("hello world");
});

app.listen(port, () => {
  console.log("server is running on port " + port);
});
