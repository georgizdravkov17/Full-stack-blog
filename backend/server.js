require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { connectDB } = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(morgan());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/posts", require("./routes/postsRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port:${PORT}`);
})
