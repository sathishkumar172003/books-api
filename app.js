require("dotenv").config();

// modules importing
const express = require("express");
const connectDb = require("./db/connect");

// routes
const bookRoutes = require("./routes/books");

const app = express();

// setting up middlewares for body parser and json parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// home route for testing
app.use("/api/v1/books", bookRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to Books Api");
});

// connecting to database and starting the server
const start = async () => {
  await connectDb(process.env.MONGO_URI);
  console.log("database connected! ");
  app.listen(5000, () => {
    console.log("server running on port 5000");
  });
};

start();
