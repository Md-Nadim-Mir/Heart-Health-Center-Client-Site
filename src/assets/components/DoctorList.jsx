import { useEffect, useState } from "react";
import { getDoctor } from "../../api/test";
import DoctorCard from "./DoctorCard";


const DoctorList = () => {

    const [alldoctor , setDoctor]=useState([]);

    useEffect( ()=>{

         getDoctor()
         .then(data=>setDoctor(data))
           
    },[])

    return (

        <div className="my-5 pt-10">

            <h1 className="text-3xl font-bold text-center">Specialized Doctor </h1>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-16 px-2">

                {
                   alldoctor.map((doctor)=><DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>)
                }

               


            </div>
        </div>

    );
};

export default DoctorList;