import { ContainerMongoDB } from '../../Api/ContainerMongoDB.js'
import {cartSchema} from '../../Models/carts.js'

class cartsMongoDB extends ContainerMongoDB {
    constructor() {
        super({collection: "carts", schema: cartSchema})
    }
}

export { cartsMongoDB };