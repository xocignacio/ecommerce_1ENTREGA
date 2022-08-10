import { FilesystemContainer } from '../../Api/FilesystemContainer.js'
import {cartModel} from '../../Models/carts.js'

class CartFiles extends   FilesystemContainer {
    constructor() {
        super('carts', cartModel)
    }
}

export {CartFiles};