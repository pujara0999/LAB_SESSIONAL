const mongoose = require("mongoose");

const FeedbackModel = mongoose.model("feedback",
    mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        score: {
            type: Number,
            required: true
        }
    })
);

module.exports = FeedbackModel;
