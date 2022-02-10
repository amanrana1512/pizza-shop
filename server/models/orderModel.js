const mongoose=require('mongoose')

const orderSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'order name required']
    },
    email:{
        type:String,
        required:[true,'email is required']
    },
    userid:{
        type:String,
      //  required:true
    },
    orderItems:{
        type: Array,
        required:true
    },
    shippingAddress:{
        type:Object,
        required:true
    },
    orderAmount:{
        type:String,
     //   required:true
    },
    isDelivered:{
        type:String,
      //  required:true
    },
    transactionId:{
        type:String,
       // required:true
    },

},{timestamps:true})

module.exports=mongoose.model('order',orderSchema);