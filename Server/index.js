const express = require("express");
const mongoose = require("mongoose");
const { MONGO_DB } = require("./Constants");
const cors = require("cors");

const userRoute = require("./Routes/User");

const app = express();
const PORT = 8000 || process.env;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.json({
    msg: "Hello from CityScape",
  });
});

app.listen(PORT, () => {
  console.log("Server Started");
  mongoose
    .connect(MONGO_DB)
    .then(() => {
      console.log("Database Conneted");
    })
    .catch((err) => {
      console.log(err);
    });
});
