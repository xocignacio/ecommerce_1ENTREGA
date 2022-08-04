import ContenedorMongoDB from '../ruta/contenedor/ContenedorMongoDB.js'
import cartModel from '../../Models/carts.js'

export class cartsMongoDB extends ContenedorMongoDB {
    constructor() {
        super('carts', cartModel)
    }
}