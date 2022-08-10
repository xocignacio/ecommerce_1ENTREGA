import { ContainerMongoDB } from '../../Api/ContainerMongoDB.js';
import {ProdModel} from '../../Models/prods.js'

class prodMongoDB extends ContainerMongoDB {             ///// Clase hija/derivada de ContainerMongoDB, por eso puedo acceder a todos los metodos del container hasta crear nueva aca
    constructor() {
        super({collection: "prods", schema: ProdModel})
    }
}

export {prodMongoDB};