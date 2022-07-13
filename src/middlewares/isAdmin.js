const IS_ADMIN = true;        // si la variable no es true, no va a dejar entrar a las rutas                                                

const isAdmin = (req, res, next) => {
  if (!IS_ADMIN) res.send({ error: "Usuario no autorizado" });

  next();
};

export { isAdmin };
