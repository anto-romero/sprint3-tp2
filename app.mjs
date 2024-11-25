import express from "express";
import { connectDB } from "./src/config/dbConfig.mjs";
import superHeroRoutes from "./src/routes/superHeroRoutes.mjs";

const app = express();
const PORT = process.env.PORT || 3000;

//middleware para parsear a JSON
app.use(express.json());

//conexion a MONGODB
connectDB();


//configuracion de las rutas
app.use("/api", superHeroRoutes);

//manejo de errores para rutas no encontradas
app.use((req,res) =>{
  res.status(404).send({mensaje: "Ruta no encontrada"})
})

//iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
