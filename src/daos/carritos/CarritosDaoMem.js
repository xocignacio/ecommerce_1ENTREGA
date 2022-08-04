import MemoryContainer from '../../Api/MemoryContainer'
import cartModel from '../../Models/carts.js'

export class cartsMongoDB extends  MemoryContainer {
    constructor() {
        super('carts', cartModel)
    }
}