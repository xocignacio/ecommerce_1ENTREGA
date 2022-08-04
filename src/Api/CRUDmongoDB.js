import mongoose from "mongoose";
import ProdModel from "../Models/prods";

const main = async () => {
  try {
   
    const URL = "mongodb://localhost:27017/ecommerce";
    let rta = await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected :)");

    /* --------------------------------------- */
    /*                CREATE                   */
    /* --------------------------------------- */

    console.log('CREATE PROD');
    const prod = {
        name: 'ipa',
        description: 'ibu fuerte',
        category: 'artesanal',    
        price: 450,
    };

    // const userSaved = new UserModel(user);         ///// instancio mi userModel y dentro la constante user, que declare arriba 
    // let response = await userSaved.save();        ////// lo guardo obligatoriamente para subirlo 
    // console.log(response);

    console.log("CREATE OTHER PROD");              ///// el metodo create hace lo mismo que el metodo save de arriba, es otra forma de crear un usuario
    await ProdModel.create({
        name: 'red',
        description: 'ibu intermedio',
        category: 'artesanal',    
        price: 400,
    });

    //create es un atajo para guardar uno o más documentos en la base de datos.

    /* --------------------------------------- */
    /*                READ ALL                 */
    /* --------------------------------------- */

    // console.log("READ ALL");
    // const usersList = await UserModel.find({});    userList lo creo con ese nombre por que contiene todo, userModel es la coleccion a la que quiero entrar(), el find {} el objeto vacio es para que traiga todo o puedo poner {name:"juana"} y me hace un filtro y me trae a juana 
    // console.log({ usersList });

    /* --------------------------------------- */
    /*                UPDATE                   */
    /* --------------------------------------- */
    // console.log("UPDATE");
    // let userUpdate = await UserModel.updateOne({
    //   _id: "62db480fccb150d329c9b78a"},                  ///// lo que quiero cambiar
    //   {$set: {name: 'Pamela'}}                           ///// el nuevo valor
    //   )
    //   console.log(userUpdate);

    // console.log('DELETE');
    //   const response = await UserModel.deleteOne({ _id: "62db480fccb150d329c9b78a"});
    //   console.log({ response });

    // console.log("READ ONE");
    // const usersList = await UserModel.find({name: "Juana"});
    // console.log({ usersList });

    /* --------------------------------------- */
    /*                UPDATE                   */
    /* --------------------------------------- */

    console.log("READ PROJECTION + FILTER");                               ///// sort (acomoda de forma decreciente), sip (salta algo determinado) limit (limita los documentos que quiero mandar )
    console.log(
      await ProdModel.find(
        { name: "Juana" },
        { name: 1, lastName: 1, email: 1, _id: 0 }
      )
    );
    console.log(
      await ProdModel.find(
        { lastName: "Perez" },
        { name: 1, lastName: 1, email: 1, _id: 0 }
      )
    );

    console.log("READ PROJECTION + SORT");
    console.log(
      await ProdModel.find({}, { name: 1, _id: 0 }).sort({ name: -1 })
    );

    console.log("READ PROJECTION + SORT");
    console.log(
      await ProdModel.find({}, { name: 1, _id: 0 }).sort({ name: -1 })
    );

    console.log("READ PROJECTION + SORT + SKIP");
    console.log(
      await ProdModel
        .find({}, { name: 1, _id: 0 })
        .sort({ name: -1 })
        .skip(5)
    );

    console.log("READ PROJECTION + SORT + SKIP + LIMIT");
    console.log(
      await ProdModel
        .find({}, { name: 1, _id: 0 })
        .sort({ name: -1 })
        .skip(1)
        .limit(2)
    );

  } catch (error) {
    console.error("DB Error: ", error);
  }
};

main();







