const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const ReviewModel = require("./model/reviewModel")
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;
const DB_URL = process.env.MONGODB_URL;


app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/reviews", async(req, res) => {
    let tempReviews = [
        {
          "id": "R12345",
          "patient_name": "John Doe",
          "designation": "Software Engineer",
          "star_rating": 5,
          "review": "I had a heart procedure done, and the care was exceptional. The doctor explained every step, and my recovery has been smooth."
        },
        {
          "id": "R67890",
          "patient_name": "Emily Smith",
          "designation": "Teacher",
          "star_rating": 4,
          "review": "I underwent knee replacement surgery. The surgery went well, and I am now walking without pain. The only downside was the long wait times for follow-ups."
        },
        {
          "id": "R24680",
          "patient_name": "Michael Brown",
          "designation": "Marketing Manager",
          "star_rating": 5,
          "review": "I struggled with severe acne, but the dermatologist's treatment worked wonders. My skin has transformed, and I feel more confident."
        },
        {
          "id": "R13579",
          "patient_name": "Sophia Wilson",
          "designation": "Student",
          "star_rating": 3,
          "review": "The doctor was professional, but the consultation felt rushed. I had to ask for more details about my treatment plan."
        },
        {
          "id": "R54321",
          "patient_name": "David Johnson",
          "designation": "Entrepreneur",
          "star_rating": 5,
          "review": "The hospital staff was very attentive, and my surgery was a success. The post-surgery care was also excellent."
        },
        {
          "id": "R98765",
          "patient_name": "Laura Martinez",
          "designation": "Nurse",
          "star_rating": 4,
          "review": "My experience with the hospital was good overall. The nurses were caring, but the billing process took longer than expected."
        },
        {
          "id": "R11223",
          "patient_name": "Robert Lee",
          "designation": "Architect",
          "star_rating": 5,
          "review": "I had a complicated dental procedure, but everything went smoothly. The dentist explained the process well, and I had minimal pain."
        },
        {
          "id": "R33445",
          "patient_name": "Jessica Adams",
          "designation": "Freelancer",
          "star_rating": 4,
          "review": "The doctor was knowledgeable and friendly. However, the hospital waiting time was too long, which was frustrating."
        },
        {
          "id": "R55667",
          "patient_name": "Daniel Carter",
          "designation": "Accountant",
          "star_rating": 5,
          "review": "The treatment was highly effective, and the doctor was very supportive throughout my recovery. Highly recommend!"
        },
        {
          "id": "R77889",
          "patient_name": "Olivia White",
          "designation": "Lawyer",
          "star_rating": 3,
          "review": "The hospital facilities were clean, and the doctor was skilled. However, I felt like my concerns weren’t addressed properly."
        }
      ];

      tempReviews.forEach((item) => { 
        let newReviews = new ReviewModel({
            id: String,
            patient_name: String,
            designation: String,
            star_rating: Number,
            review: String,
        });

        newReviews.save();
      })

      res.send("Suucess");
})

app.listen(PORT, () => {
    console.log("Server is running on port ", PORT);
    try{
        // Connect to MongoDB
        mongoose.connect(DB_URL);
        console.log("Connected to MongoDB");
    } catch(err) {
        console.log("Error connecting to MongoDB", err);
    }
})