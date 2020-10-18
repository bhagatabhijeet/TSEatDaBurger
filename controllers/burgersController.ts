import {Request,Response} from "express";
import burger from '../models/burgerOrm'




export async function getAllBurgers(req:Request,res:Response){
  burger.all((burgerData)=>{
    res.render("index",{ burger_data: burgerData })
  });
}

export async function createBurger(req:Request,res:Response) {
  burger.create(req.body.burger_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
}

export async function devourBurger(req:Request,res:Response) {
    burger.update(parseInt(req.params.id), function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
}




//export default router;

