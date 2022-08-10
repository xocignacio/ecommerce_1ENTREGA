import mongoose from "mongoose";
const {Schema, model} = mongoose

const prodsCollection = 'prods';

const prodsSchema = new Schema({
    name: {type: String, required: true, max: 50},
    description: {type: String, required: true, max: 100},
    category: {type: String, required: true, max: 30},    
    price: {type: Number, required: true, max: 10000},
    stock: {type: Number, required: true},
},
{
    virtuals: true,     /////// es para agregar la funcion prodsCollection.set("toJSON"
    timestamps: true,
});

prodsSchema.set("toJSON", {                /* Es como un middleware */
 transform: (_, response) => {      /* Setea la propiedad de _id (genera mongo por defecto) por id, para poder trabajar todos los metodos en la app */
 response.id = response._id;
 delete response._id;                              ///en la bd segiora siendo _id
 return response;
 },
});


const ProdModel = model(prodsCollection, prodsSchema);

export { ProdModel, prodsSchema}  ///// el Model es muy importante! a este molde lo uso para crear, eliminar etcs
