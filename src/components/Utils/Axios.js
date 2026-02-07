


// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
// });

// export default axiosInstance;

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});

export default axiosInstance;
