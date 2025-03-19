const {Schema} = require("mongoose");

const ReviewSchema = new Schema({
    id: String,
    patient_name: String,
    designation: String,
    star_rating: Number,
    review: String,
});

module.exports = { ReviewSchema };