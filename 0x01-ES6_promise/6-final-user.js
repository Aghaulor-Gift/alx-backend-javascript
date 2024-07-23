import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';


export default function handleProfileSignup(firstName, lastName, fileName) {
  // Create promises for signUpUser and uploadPhoto
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  // Return a promise that resolves when both promises are settled
  return Promise.allSettled([userPromise, photoPromise])
    .then(results => {
      // Map the results to the required format
      return results.map(result => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason
      }));
    });
