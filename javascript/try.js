


// Function to fetch user data from JSONPlaceholder API
function fetchUserData(userId) {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(`Failed to fetch user data: ${error.message}`));
    });
  }
  
  // Using async/await to consume the fetchUserData function
  async function fetchUserDataExample() {
    try {
      const userId = 1; // Change the user ID as needed
      console.log(`Fetching user data for user ID ${userId}...`);
      const userData = await fetchUserData(userId);
      console.log("User Data:", userData);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchUserDataExample();