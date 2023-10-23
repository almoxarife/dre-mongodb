import app from "./index";
import * as dotenv from "dotenv"
dotenv.config();
/* import { AppDataSource } from "./data-source";

AppDataSource.initialize()
.then(() => {
    console.log("Database Connected!");
    const port = process.env.PORT ?? 3000

    app.listen(port, () => {
        console.log(`App running on http://localhost:${port}/`);
    });
}).catch((err) => console.error(err));
 */
import { client } from "./data-source";

async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);