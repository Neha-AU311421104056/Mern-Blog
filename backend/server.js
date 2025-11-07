const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
// MongoDB Connection
mongoose.connect('mongodb+srv://nehabio2004:7l0h4V4IaVxgpWC7@cluster0.y3ggmqz.mongodb.net/flowerBlogDB?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const blogRoutes = require("../backend/routes/blogRoutes.js");
app.use("/blogs", blogRoutes);
