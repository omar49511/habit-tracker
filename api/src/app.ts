import express from "express";

export function createApp() {
  const app = express();
  app.use(express.json()); // Configurar middleware para analizar el cuerpo de las solicitudes en formato JSON
  // Otros middleware y configuraciones
  return app;
}
