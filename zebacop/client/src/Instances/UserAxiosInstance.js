import axios from 'axios'
const baseURL="http://localhost:5000/"

const defaultOption={
    baseURL:baseURL,
    headers:{
        "Content-Type": "application/json",
    }
}
let userInstance=axios.create(defaultOption);
// userInstance.interceptors.request.use(function (config) {
//     const token = localStorage.getItem("userToken");
//     config.headers.accesstoken = token;
//     return config;
//   });
export default userInstance;