import  prodMongoDB  from './productos/ProductosDaoMongoDb'
import  cartsMongoDB  from './carritos/CarritosDaoMongoDb'

const db = PROCESS.ENV.TIPO_DB || 'mongodb'

let productoDao 
let carritoDao

switch(db){
    case 'mongodb': 
        productoDao = new prodMongoDB()
        carritoDao = new cartsMongoDB()
        break
    
    default:
        productoDao = new ProductosFirebase()
        carritoDao = new CarritoFirebase()
        break      
}

export { productoDao, carritoDao }