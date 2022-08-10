import { FilesystemContainer } from '../../Api/FilesystemContainer.js'
import {ProdModel} from '../../Models/prods.js'

class prodFiles extends  FilesystemContainer {
    constructor() {
        super({collection: "prods", schema: ProdModel})
    }
}

export {prodFiles};
