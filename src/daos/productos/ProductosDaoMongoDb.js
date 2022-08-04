import ContenedorMongoDB from '../ruta/contenedor/ContenedorMongoDB.js'
import ProdModel from '../../Models/prods.js'

export class prodMongoDB extends ContenedorMongoDB {
    constructor() {
        super('prods', ProdModel)
    }
}