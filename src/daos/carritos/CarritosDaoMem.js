import { MemoryContainer } from '../../Api/MemoryContainer.js';
import {cartModel} from '../../Models/carts.js'

class cartsMemory extends  MemoryContainer {
    constructor() {
        super('carts', cartModel)
    }
}

export {cartsMemory};
