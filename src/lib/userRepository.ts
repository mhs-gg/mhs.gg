import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.MONGO_USER_URI) {
  throw new Error('Invalid / Missing environment variable: MONGO_USER_URI')
}

const user_uri = process.env.MONGO_USER_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
}

let client;
let user_repository: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // Using a global variable to preserve value across module reloads caused by HMR
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  }

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(user_uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  user_repository = globalWithMongo._mongoClientPromise
} else {
  client = new MongoClient(user_uri, options);
  user_repository = client.connect();
}

export default user_repository;