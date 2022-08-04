import { FilesystemContainer } from '../../Api/FilesystemContainer.js'
import ProdModel from '../../Models/prods.js'

export class prodMongoDB extends  FilesystemContainer {
    constructor() {
        super('prods', ProdModel)
    }
}