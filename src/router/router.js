const express = require('express');
const router = express.Router();

const routesEnabled = () => {

    router.get("/dummy",(req,res)=>{
        res.send("home page");
    });

    router.use((req,res,next)=>{
        next();
   });

   return router;
};

module.exports = Object.assign({}, {routesEnabled});