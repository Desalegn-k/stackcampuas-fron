import axios from 'axios';
const axiosBase = axios.create({
  baseURL: "https://stackcampus-desu.onrender.com/api",
});
export default axiosBase