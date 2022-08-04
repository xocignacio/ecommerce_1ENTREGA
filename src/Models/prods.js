import mongoose from "mongoose";
const {Schema, model} = mongoose

const prodsCollection = 'prods';

const prodsSchema = new Schema({
    name: {type: String, required: true, max: 50},
    description: {type: String, required: true, max: 100},
    category: {type: String, required: true, max: 30},    
    price: {type: Number, required: true, max: 10000}
})

const ProdModel = model(prodsCollection, prodsSchema)

export default ProdModel;   ///// el Model es muy importante! a este molde lo uso para crear, eliminar etcs
