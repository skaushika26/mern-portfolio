import axios from 'axios';

const API = axios.create({
  baseURL: 'https://mern-portfolio-yx0m.onrender.com/api' // Your LIVE backend URL
});

export default API;