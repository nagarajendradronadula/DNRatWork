require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const ReviewModel = require("./model/reviewModel");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 8080;
const DB_URL = process.env.MONGODB_URL;

if (!DB_URL) {
    console.error("Error: MONGO_URL is undefined. Check your .env file.");
    process.exit(1);
}

// Set up EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Connect to MongoDB
mongoose.connect(DB_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));


// Render Form + Existing Reviews
app.get("/", async (req, res) => {
    try {
        const reviews = await ReviewModel.find();
        res.render("index", { reviews });
    } catch (error) {
        res.status(500).send("Error fetching reviews");
    }
});

//reviews being sent to frontend
app.get("/reviews", async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        res.status(500).send("Error fetching reviews");
    }
});

// Add a New Review
app.post("/reviews", async (req, res) => {
    console.log("Received Data: ", req.body);

    try {
        const newReview = new ReviewModel({
            patient_name: req.body.patient_name,
            designation: req.body.designation,
            star_rating: Number(req.body.star_rating),  // Convert to number
            review: req.body.review
        });

        await newReview.save();
        console.log("Review saved successfully!");
        res.redirect("/");
    } catch (error) {
        console.error("Error adding review:", error);
        res.status(400).send("Error adding review");
    }
});

// Update a Review
app.post("/reviews/update/:id", async (req, res) => {
    try {
        await Review.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/");
    } catch (error) {
        res.status(400).send("Error updating review");
    }
});

// Delete a Review
app.post("/reviews/delete/:id", async (req, res) => {
    try {
        await Review.findByIdAndDelete(req.params.id);
        res.redirect("/");
    } catch (error) {
        res.status(400).send("Error deleting review");
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));