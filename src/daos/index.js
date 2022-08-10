import { config } from "../config/index.js"   

import { prodFiles, prodMemory, prodMongoDB } from "../daos/productos/index.js"
import { CartFiles,cartsMemory, cartsMongoDB } from "../daos/carritos/index.js"
import dotenv from "dotenv"
dotenv.config();


const getDaosBySelectedDB = ({selectedDB}) => {
    switch (selectedDB) {
        case config.persistences.mongo: {
            const productoDao = new prodMongoDB ();
            const cartDao = new cartsMongoDB ();
            return {productoDao, cartDao};
        }
        case config.persistences.filesystem: {
            const productoDao = new prodFiles ();
            const cartDao = new CartFiles ();
            return {productoDao, cartDao};
         }
         case config.persistences.memory: {
            const productoDao = new prodMemory ();
            const cartDao = new cartsMemory ();
            return {productoDao, cartDao};
         }
        default: {
            const productoDao = new prodMongoDB ();
            const cartDao = new cartsMongoDB ();
            return {productoDao, cartDao};

        }
    }
};

const {productoDao, cartDao} = getDaosBySelectedDB({
    selectedDB: config.server.SELECTED_DB,
});


export { productoDao, cartDao} ;