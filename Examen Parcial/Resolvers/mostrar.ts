//@ts-ignore
import { Request, Response } from "npm:express@4.18.2";
import { ExamenModel } from "../db/MONGOdb.ts";
import { Ciudad, Mon } from "../types.ts";


export const mostrar= async(req:Request, res:Response)=>{

    const mostrar= (await ExamenModel.find()).map(elem => {elem.Nombre
                                                            elem._id
                                                            elem.País})

    res.status(200).send(mostrar);

}

export const mostrar_por_id= async (req:Request, Res:Response)=>{
    const id= req.params.id;
}