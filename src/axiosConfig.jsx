import axios from 'axios';
const axiosBase = axios.create({
  baseURL: "https://stackcapus-desalegn.onrender.com/",
});
export default axiosBase