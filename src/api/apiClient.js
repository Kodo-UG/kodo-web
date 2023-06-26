import axios from 'axios';

const api = axios.create({
  baseURL: 'https://kodo-api.onrender.com', // Replace with your API base URL
  timeout: 5000, // Set the request timeout (in milliseconds)
  headers: {
    'Content-Type': 'application/json', // Set the content type for requests
    // Add any additional headers you require
  },
});


export default api;