import axios from 'axios';
const axiosBase = axios.create({
  baseURL: "https://stackcampus-backend-1.onrender.com/api",
});
export default axiosBase