import mongoose from "npm:mongoose@7.6.3"
import { Monumento } from "../types.ts";

const Schema= mongoose.Schema

const SchemaExamen = new Schema({
    Nombre: {type: String, required:true},
    Descripción: {type: String, required:true},
    Código_Postal: {type: String, required:true},
    País: {type: String, required:true},
})

export type ExamenModelType = mongoose.Document & Monumento

export const ExamenModel= mongoose.model<ExamenModelType>("Examen Parcial ", SchemaExamen)