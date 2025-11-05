import axios from 'axios';
const axiosBase = axios.create({
  baseURL: "https://stackcampus-desu.onrender.com",
});
export default axiosBase