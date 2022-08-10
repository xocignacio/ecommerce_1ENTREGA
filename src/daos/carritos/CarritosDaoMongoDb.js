import { ContainerMongoDB } from '../../Api/ContainerMongoDB.js'
import {cartModel} from '../../Models/carts.js' 

class cartsMongoDB extends ContainerMongoDB {
    constructor() {
        super({collection: "carts", schema: cartModel})
    }
}

export { cartsMongoDB };