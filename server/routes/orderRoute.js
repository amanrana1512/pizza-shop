const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51KO0aSSDRITguegaxYygoCtVmNwiJOFBhhTAUN3eHlFbbMnlFeTgEaAYb4htGSApUOqM20PQBaOOwv5lnz4S2tmj00NCUyrmB8"
);
const Order=require('../models/orderModel')


router.post("/placeorder", async (req, res) => {
  const { token, subTotal, currentUser, cartItems } = req.body;
  try {
    const product = await stripe.products.create({
      name: cartItems[0].name,
      description: cartItems[0].varient,
    });
    
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: subTotal,
      currency: 'inr',
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price: price.id,
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'https://example.com/cancel',
    });
    console.log(session);
    if (session) {
      const newOrder= new Order({
        name:currentUser.name,
        email:currentUser.email,
        userid:currentUser._id,
        orderItems:cartItems,
        orderAmount:subTotal,
        shippingAddress:{
          street:token.card.address_line1,
          city:token.card.address_city,
          country:token.card.address_country,
          pincode:token.card.address_zip,
        },
        transactionId: session.id,
      });
      newOrder.save()
      res.send("payment success");
    } else {
      res.send("payment failed");
    }
  } catch (error) {
    res.status(400).json({
      message: "something went wrong",
      error: error.stack
    });      console.log(error);

  }
});


router.post('/getuserorder',async(req,res)=>{
  const {userid}=req.body
 

  try {
    const orders=await Order.find({userid}).sort({_id:'-1'})
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).json({
      message:'something went wrong',
      error:error.stack,
    })
  }
})


module.exports = router;
