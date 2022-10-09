import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  Id:  String, // String is shorthand for {type: String}
  customerName: String,
  phoneNumber: Number,
  address : String,
  loanAmount:Number,
  interest: Number,
  loanTermYears:Number,
  loanType: Number,
  description:String,
  createdDate: {type:Date,default:Date.now },
  insertedDate: {type:Date,default:Date.now }
  });
