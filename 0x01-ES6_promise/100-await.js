import { uploadPhoto, createUser } from './utils';


export default async function asyncUploadUser() {
  try {
    // Wait for both promises to resolve
    const [photo, user] = await Promise.all([
      uploadPhoto(),
      createUser()
    ]);

    // Return an object with the responses
    return {
      photo: photo,
      user: user
    };
  } catch (error) {
    // Return an object with null values if any function fails
    return {
      photo: null,
      user: null
    };
  }
}
