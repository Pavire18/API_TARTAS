import { type SwaggerOptions } from "swagger-ui-express";

export const swaggerOptions: SwaggerOptions = {
  swaggerOptions: {
    docExpansion: "none", // Asegúrate de que esté en el lugar correcto
  },
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node S15",
      version: "1.0.0",
      description: "This is a simple CRUD API",
      license: {
        name: "MIT",
        url: "http://mit.com",
      },
      contact: {
        name: "Pablo Villarino Redondo",
        url: "https://github.com/franlidebl",
        email: "pablo@example.com"
      }
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: [
    "./src/**/*.ts",
  ]
};
