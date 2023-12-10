const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    title: {
        type:String,
        requires: true
    },
    description: String,
    image: {
        type: String,
        default: "https://myairbnbproject.s3.ap-south-1.amazonaws.com/download+(2).jpeg"
    },
    price: Number,
    location: String,
    country: String
});

const Listing = mongoose.model("Listing", listingSchema); //mongoose.model(<collectionName>, <Schema>);

module.exports = Listing;
