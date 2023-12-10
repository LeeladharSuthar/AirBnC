const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const Listing = require("./models/listing.js");

const app = express();

app.set('view-engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const port = 8080;
const MONGO_URL = 'mongodb://127.0.0.1:27017/projectOne';

async function main() {
    await mongoose.connect(MONGO_URL);
}

main().then(() => {
    console.log("Connected to DB.");
}).catch((err) => {
    console.log(err);
})

app.listen(port, () => {
    console.log("Server listening at port 8080");
})

app.get("/", (req, res) => {
    res.send("Home page");
})

app.get('/listing', async (req, res)=>{
    const listing = await Listing.find();
    res.render('listing.ejs', {listing});
})

// app.get("/listing", async (req, res) => {
//     let newListing = new listing({
//         title:"",
//         description:"",
//         price:0,
//         location:"",
//         country:"",
//         image:""
//     });
//     let result = await newListing.save();
//     res.send("successful");
    

// })