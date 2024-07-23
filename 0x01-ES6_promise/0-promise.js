export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Response from API');
    }, 1000); // Simulates a delay of 1 second
  });
}
