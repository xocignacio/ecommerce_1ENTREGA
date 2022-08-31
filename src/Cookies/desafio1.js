import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const port =8080;
const server = app.listen(port,()=>console.log(`Listening on port: ${port}`))

app.use(express.json());
app.use(cookieParser());

app.get('/cookies',(req,res)=>{
    res.send(req.cookies);
})
app.post('/cookies',(req,res)=>{              ///// que elemento de req itulizamos siempre  post? por el body {} ,, siempre recibo por el body
    let {name,value,expires} = req.body;
    if(!name||!value) return res.status(400).send({status:"error",error:"Incomplete Values"}) ///// si no viene un name o value envio un estatus error
    res.cookie(name,value,{
        maxAge:expires?expires*1000:10000     ////// uso un ternario para poner un maxage por default
    }).send("cookie set");
})
app.delete('/cookies/:cname',(req,res)=>{
    let cookie = req.params.cname;
    res.clearCookie(cookie).send("Cookie clear")
})