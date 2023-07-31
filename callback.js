// Simulate fetching user data from the server asynchronously
function getUserData(userId, callback) {
    setTimeout(() => {
        // In a real scenario, data would be fetched from a server using an API call
        const userData = {
            id: userId,
            name: "John Doe",
            age: 30,
        };
        callback(userData);
    }, 1000); // Simulate a 1-second delay for fetching data
}

// Callback function to process user data once it is fetched
function processUserData(userData) {
    console.log("User Data Received:", userData);
}

// Usage: Fetch user data and process it using the callback function
getUserData(123, processUserData);
