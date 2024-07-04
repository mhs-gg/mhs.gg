import user_repository from "@/lib/userRepository";

async function createUser(user:User) {
  const client = await user_repository;
  const db = client.db();
  const result = await db.collection('users').insertOne(user);
  return result.insertedId;
}

async function getUserByEmail(email:string) {
  const client = await user_repository;
  const db = client.db();
  const user = await db.collection('users').findOne({ email });
  return user;

}

async function updateUser(email: string, updatedUser: User) {
  const client = await user_repository;
  const db = client.db();
  const result = await db.collection('users').updateOne({ email }, { $set: updatedUser });
  return result.modifiedCount;
}

async function deleteUser(email: string) {
  const client = await user_repository;
  const db = client.db();
  const result = await db.collection('users').deleteOne({ email });
  return result.deletedCount;
}

async function getAllUsers() {
  const client = await user_repository;
  const db = client.db();
  const users = await db.collection('users').find().toArray();
  return users;
}


// Todo: update / correct criteria type assignment.
async function findUsersByCriteria(criteria:any) {
  const client = await user_repository;
  const db = client.db();
  const users = await db.collection('users').find(criteria).toArray();
  return users;
}

export { createUser, deleteUser, findUsersByCriteria, getAllUsers, getUserByEmail, updateUser };
