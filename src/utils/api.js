// const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8082"; // Fallback to localhost

// console.log("Using API URL:", API_URL); // Debugging: Check API URL

// // Utility function to handle GET requests
// export const apiGet = async (endpoint) => {
//   try {
//     const response = await fetch(${API_URL.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       const errorText = await response.text(); // Handle both JSON and text errors
//       throw new Error(GET ${endpoint} failed: ${errorText || response.statusText});
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("API GET error:", error);
//     throw error;
//   }
// };

// // Utility function to handle POST requests
// export const apiPost = async (endpoint, data) => {
//   try {
//     const response = await fetch(${API_URL.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       const errorText = await response.text(); // Get response body
//       throw new Error(POST ${endpoint} failed: ${response.status} - ${errorText});
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("API POST error:", error);
//     throw new Error("Network error: Unable to connect to the server.");
//   }
// };