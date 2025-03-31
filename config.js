const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL_PROD  // Use production URL
    : process.env.REACT_APP_API_URL;      // Use local URL

export default API_BASE_URL;

// const API_BASE_URL = process.env.REACT_APP_API_URL_PROD || process.env.REACT_APP_API_URL;
// export default API_BASE_URL;