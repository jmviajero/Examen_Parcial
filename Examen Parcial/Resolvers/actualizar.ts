//@ts-ignore
import { Request, Response } from "npm:express@4.18.2";
import { ExamenModel } from "../db/MONGOdb.ts";
import { Ciudad, Mon } from "../types.ts";


export const actualizar= async(req:Request, res: Response)=>{

    const id = req.params.id

    const {Nombre, Descripción, codigo_postal, Pais}= req.body

    const ex= await ExamenModel.find({_id:id}).exec();

    if (!ex) {
        res.status(404).send("No existe con ese id")
        return
    }

    const a= await ExamenModel.findOneAndUpdate({_id: id},{
        Nombre: Nombre,
        Descripción: Descripción,
        Código_Postal: codigo_postal,
        Pais: Pais
    })

    res.status(200).send(a);

}