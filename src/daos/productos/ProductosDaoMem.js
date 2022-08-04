import MemoryContainer from '../../Api/MemoryContainer'
import ProdModel from '../../Models/prods.js'

export class prodMongoDB extends  MemoryContainer {
    constructor() {
        super('prods', ProdModel)
    }
}