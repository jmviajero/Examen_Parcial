import express from "npm:express@4.18.2"
import mongoose from "npm:mongoose@7.6.3"

import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts"
import { añadir_monumento } from "./Resolvers/a%C3%B1adir.ts";
import { mostrar } from "./Resolvers/mostrar.ts";

const env= await load();

const MONGO_URL= env.MONGO_URL || Deno.env.get("MONGO_URL")

const PORT= env.PORT || Deno.env.get("PORT") || 2998

if (!MONGO_URL) {
  console.log("url no valida")
  Deno.exit(1)
}

try {
  await mongoose.connect(MONGO_URL)
  console.log("conectado con exito a la base de datos de Mongo")

  const app= express()

  app.use(express.json())

  app.get("/api/monumentos", mostrar)

  app.get("/api/monumentos/:id", )

  app.post("/api/monumentos", añadir_monumento )


  app.listen(PORT, ()=>{
    console.log("conectado con exito por el puerto "+ PORT)
  })

  
} catch (error) {
  console.error(error)
}