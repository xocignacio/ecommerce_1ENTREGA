
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCPW1OGsVMYgHqIFAiLBIPofKgBReJeb94",
  authDomain: "beerscript-ebe0f.firebaseapp.com",
  projectId: "beerscript-ebe0f",
  storageBucket: "beerscript-ebe0f.appspot.com",
  messagingSenderId: "180404855050",
  appId: "1:180404855050:web:45006f48487a0fdee6daf3"
};


export const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app
}

