const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");
const admin = require("firebase-admin");


const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NyWfaHI4glNbvFMTuead9ayxQzArAmHkTPlY1r2QtU824HCk5RNkFcW22B4atQ4dogsPKXqBd5WpeRHQltdVyIH00lnwl1Sdw"
);

const app = express();


app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());


app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/Payement/create", async (request, response) => {
  const total = request.query.total;

  console.log("payement request recived for this amount >>>>>>>", total);

  const payementIntent = await stripe.payementIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: payementIntent.client_secret,
  });
});

// http://127.0.0.1:5001/clone-beecf/us-central1/api




exports.api = functions.https.onRequest(app); 


