import * as dotenv from "dotenv";
dotenv.config()
/* import path from "path";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mongodb",
    url: process.env.DATABASE_URL,
    logging: false,
    entities: [path.join(__dirname, `./entities/.{js, ts}`)],
    migrations: [path.join(__dirname, `./migrations/.{js, ts}`)],
}) */

// import "reflect-metadata"
// import { DataSource } from "typeorm"
// import { User } from "./entity/User"

// export const AppDataSource = new DataSource({
//     type: "mongodb",
//     database: "test",
//     synchronize: true,
//     logging: false,
//     entities: [User],
//     migrations: [],
//     subscribers: [],
// })


import { MongoClient, ServerApiVersion } from 'mongodb';
// const uri = "mongodb+srv://logistica:29710173@cluster0.bma96wb.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(process.env.DATABASE_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



