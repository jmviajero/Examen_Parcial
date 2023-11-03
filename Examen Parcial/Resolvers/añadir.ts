//@ts-ignore
import { Request, Response } from "npm:express@4.18.2";
import { ExamenModel } from "../db/MONGOdb.ts";
import { Ciudad, Mon } from "../types.ts";




export const añadir_monumento = async (req:Request, res: Response)=>{

    const {Nombre, Descripción, codigo_postal, Pais} = req.body;

    const URL= "https://zip-api.eu/api/v1/codes/place_name="+ Nombre;

    const data = await fetch(URL);

    if(data.status !== 200) //Indica si la peticion ha sido bien respondida. Nuestro status es 200, por lo que si me debuelve algo distinto de 200
    {
      throw new Error("Eso no es valido") //Lanza un error
    }

    const json:Mon= await data.json();

   const cod= json.codigo_postal;
   const siglas= json.country_code; 
    const existe= (await ExamenModel.find()).some(elem=> elem.Nombre === Nombre && elem.Código_Postal===json.codigo_postal)

    if (existe) {
        res.status(400).send("Ya existe")
        return
    }

    if (!Nombre || !Descripción || !codigo_postal || !Pais) {
        res.status(500).send("Faltan datos")
        return;
    }

    const monumentos= await ExamenModel.create({
        Nombre: Nombre,
        Descripción: Descripción,
        Código_Postal: codigo_postal,
        País: Pais
    })

   res.status(200).send(monumentos)

}