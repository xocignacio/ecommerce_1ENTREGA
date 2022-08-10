import { MemoryContainer } from '../../Api/MemoryContainer.js';
import {ProdModel} from '../../Models/prods.js'

class prodMemory extends  MemoryContainer {
    constructor() {
        super({collection: "prods", schema: ProdModel})
    }
}

export { prodMemory };