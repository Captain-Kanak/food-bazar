import { MongoClient, ServerApiVersion } from "mongodb";

// set collections name
export const collectionsName = {
  userCollections: "users",
  popularFoodCollections: "popular_foods",
};

// connect database
export const dbConnect = (CollectionsName) => {
  const uri = process.env.MONGODB_URI;

  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(process.env.DATABASE_NAME).collection(CollectionsName);
};
