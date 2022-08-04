import { FilesystemContainer } from '../../Api/FilesystemContainer.js'
import cartModel from '../../Models/carts.js'

export class cartsMongoDB extends   FilesystemContainer {
    constructor() {
        super('carts', cartModel)
    }
}