import mongoose from "mongoose";
const {Schema, model} = mongoose

const cartCollection = 'cart';

const cartSchema = new Schema({
    items: {type: String, required: true, max: 50},
    description: {type: String, required: true, max: 100},
    category: {type: String, required: true, max: 30},    
    price: {type: Number, required: true, max: 10000}
})

const cartModel = model(cartCollection, cartSchema)

export default cartModel;   ///// el Model es muy importante! a este molde lo uso para crear, eliminar etcs
