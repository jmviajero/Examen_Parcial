//@ts-ignore
import { Request, Response } from "npm:express@4.18.2";
import { ExamenModel } from "../db/MONGOdb.ts";
import { Ciudad, Mon } from "../types.ts";

export const borrar= async (req:Request, res:Response)=>{
    try {

        const id= req.params.id;

        const encontrar = await ExamenModel.find({_idid: id}).exec();
        if(!encontrar){
            res.status(404).send("Monumento no encontrado");
            return;
        }
        
       

       const a= await ExamenModel.findOneAndDelete({_id: id}).exec();


        res.status(200).send(a);
        
        
    } catch (error) {
        res.status(500).send(error.message);
        return;
    }
}