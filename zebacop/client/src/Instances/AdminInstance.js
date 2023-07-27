import axios from 'axios'
const baseURL="http://localhost:5000/"

const defaultOption={
    baseURL:baseURL,
    headers:{
        "Content-Type": "application/json",
    }
}
let AdminInstance=axios.create(defaultOption);

AdminInstance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("AdminToken");

    config.headers.accesstoken = token;
    return config;
  });

export default AdminInstance;







