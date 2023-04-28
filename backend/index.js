require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")(process.env.SECRET_KEY);
const uuid = require("uuid");

//middleware
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("Hi this is server");
});

app.post("/checkout", (req, res) => {
  const { product, token } = req.body;
  console.log("Product :", product);
  //   console.log("Price :", product.price);
  //   const idempontencyKey = uuid();

  return stripe.customers
    .create({
      //   email: token.email,
      //   source: token.id,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: product.price * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchase of ${product.name}`,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_country,
            },
          },
        }
        // { idempontencyKey }
      );
    })
    .then((res) => res.status(200).json(res))
    .catch((err) => console.log(err));
});

//listen
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
