import axios from "axios"

const axiosServices = axios.create()

axiosServices.interceptors.response.use(
    (response) => response,
    (error) => 
        Promise.reject((error.response && error.responde.data) || "Services errados")
)

export default axiosServices
