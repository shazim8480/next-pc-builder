// api/products.js

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://crudUser:shazim8480@cluster0.raiw9.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const productsCollection = client.db("pcBuilder").collection("pcProducts");

    if (req.method === "GET") {
      if (req.query.productID) {
        // If a productID is provided in the query, fetch a specific product
        const productID = String(req.query.productID);
        console.log("productID from db ===>", productID);
        const product = await productsCollection.findOne({ id: productID });

        if (product) {
          res.send(product);
        } else {
          res.status(404).send({ message: "Product not found", status: 404 });
        }
      } else {
        // If no productID is provided, fetch all products
        const products = await productsCollection.find({}).toArray();
        res.send({ message: "success", status: 200, data: products });
      }
    }
  } catch (error) {
    // Ensures that the client will close when you finish/error
    // await client.close();
    console.log("db connection err", error);
  }
}

export default run;
