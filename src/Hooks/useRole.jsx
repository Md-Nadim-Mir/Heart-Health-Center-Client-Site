// import { useEffect, useState } from "react";
import { getUserRole} from "../api/test";
import useAuth from "./useAuth";

import { useQuery} from '@tanstack/react-query'


const useRole=()=>{

     const {user,loading}=useAuth();
    //  const [role,setRole]=useState(null);

    //  useEffect( ()=>{

    //      getUserRole(user?.email)
    //      .then(data=>setRole(data))
          
    //  },[user])


    //  return [role]

    const {data:role , isLoading} = useQuery({

         
       enabled : !loading && !!user?.email,
       queryFn : async()=>getUserRole(user?.email),
       queryKey : ['role']
          

    })

    return [role,isLoading]

}

export default useRole;