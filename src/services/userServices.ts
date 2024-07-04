import * as userRepository from '@/repositories/userRepository';

async function registerUser(user: User) {
  return await userRepository.createUser(user);
}

async function findUserByEmail(email: string) {
  try {
    return await userRepository.getUserByEmail(email);
  } catch (error) {
    console.log('Failed to fetch user: ', error);
    throw new Error('Failed to fetch user.');
  }
}

async function modifyUser(email: string, updatedUser: User) {
  return await userRepository.updateUser(email, updatedUser);
}

async function removeUser(email: string) {
  return await userRepository.deleteUser(email);
}

async function listAllUsers() {
  return await userRepository.getAllUsers();
}

async function searchUsers(criteria: any) {
  return await userRepository.findUsersByCriteria(criteria);
}

export { findUserByEmail, listAllUsers, modifyUser, registerUser, removeUser, searchUsers };

