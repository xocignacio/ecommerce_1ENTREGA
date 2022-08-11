import express from "express";
import { config } from "./config/index.js";
import { productsRouter, cartsRouter } from "./routers/index.js";
import {MongoDBService} from './services/MongoDBService/index.js';

/* PARA PROBAR SI FUNCIONA EL CONTAINER MONGO CONSUMIENDO UN METODO 
import {ContainerMongoDB} from './Api/ContainerMongoDB.js'
import {prodsSchema} from './Models/prods.js'                                       

const ProductoDaoNuevo = new ContainerMongoDB ({collection: 'prods', schema: prodsSchema})
ProductoDaoNuevo.getAll().then((data) => console.log() )
 */

const app = express();

app.use(express.static("public"));

app.use(express.json());                               //// Podemos leer lo que recibimos por body en formato json, al usar app, vamos a poder usar este middleware en todos los router
app.use(express.urlencoded({ extended: true }));
app.use(config.server.routes.products, productsRouter);
app.use(config.server.routes.carts, cartsRouter);




const server = app.listen(config.server.PORT, () => {
  console.log(`- Server running on port  => ${server.address().port} ✔ `);
});
server.on("error", (error) => {
  console.error(`Server error: ${error}`);
});

MongoDBService.init();