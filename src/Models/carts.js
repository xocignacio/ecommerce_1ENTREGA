import mongoose from "mongoose";
const {Schema, model} = mongoose
import { ProdModel, prodsSchema}from './prods.js'

const cartCollection = 'cart';

const cartSchema = new Schema({
    items: {type: String, required: true, max: 50},
    description: {type: String, required: true, max: 100},
    category: {type: String, required: true, max: 30},    
    price: {type: Number, required: true, max: 10000},
    products: [prodsSchema]
},
{
    virtuals: true,     /////// es para agregar la funcion prodsCollection.set("toJSON"
    timestamps: true,
}
);

cartSchema.set("toJSON", {                /* Es como un middleware */
 transform: (_, response) => {      /* Setea la propiedad de _id (genera mongo por defecto) por id, para poder trabajar todos los metodos en la app */
 response.id = response._id;
 delete response._id;                              ///en la bd segiora siendo _id
 return response;
 },
});

const cartModel = model(cartCollection, cartSchema)

export  {cartModel, cartSchema }   ///// el Model es muy importante! a este molde lo uso para crear, eliminar etcs
