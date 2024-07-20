// const express = require("express");
// const cors = require("cors");
// const userRoutes = require("./routes/UserRoutes");
// const mongoose = require("mongoose");

// const app = express();

// const router = express.Router();
// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect("mongodb://localhost:27017/netflix", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DB Connetion Successfull");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// app.use("/api/user", userRoutes);

// app.listen(5000, () => {
//   console.log("server started on port 5000");
// });

require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log("DB Connection Error:", err.message);
  });

// Routes
app.use("/api/user", userRoutes);

// Start server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
