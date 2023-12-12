import axios from "axios";
import { clearCookie } from "./auth";
import { useNavigate } from "react-router-dom";



const axiosPublic= axios.create({
     baseURL:'https://server-lyart-ten.vercel.app/',
     withCredentials: true
})



// intercept response and check unauthorized access

 axiosPublic.interceptors.response.use(
    
     response=>response,
     
     async error => {
          
          console.log('Error tracked in the interceptor',error.response)

          if(
               error.response && 
               (error.response.status==401 || error.response.status==403)
          ){
               await clearCookie();
               const navigate = useNavigate();
               navigate('/login')
          }
     }
 )

export default axiosPublic;