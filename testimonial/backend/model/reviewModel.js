const {model} = require("mongoose");

const {ReviewSchema} = require("../schema/reviewSchema");

const ReviewModel = model("Review", ReviewSchema);

module.exports = ReviewModel;