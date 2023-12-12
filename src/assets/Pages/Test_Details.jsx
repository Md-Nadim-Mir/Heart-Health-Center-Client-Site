
import { useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import BookingModal from "../components/BookingModal";
import useAuth from "../../Hooks/useAuth";
import  useRole from "../../Hooks/useRole";



const Test_Details = () => {

   const [role] = useRole();

   const data = useLoaderData();
   const {user}= useAuth();

   const [isOpen,setIsOpen]=useState(false);

   const closeModal = ()=>{

       setIsOpen(false)
   }

   let [bookingInfo,setBookingInfo]=useState([])


   const handleBooking=(e)=>{

       e.preventDefault();

       const time = e.target.time.value;
       const date = e.target.date.value
       const user_name  = user.displayName;
       const user_email  = user.email ;
       const user_image  =  user.photoURL;
       const disease_name = data.disease_name;
       const disease_image = data.diseaseImage;
       const doctor_name  = data.doctor_name;
       const doctor_specialit  = data.doctor_specialist;
       const doctor_visit_fee  = data.doctor_visit_fee ;

       const combine= {time,date,user_name,user_email,user_image,disease_name,disease_image,doctor_name,doctor_specialit,doctor_visit_fee,status:'pending'};

       console.log(combine)

       setBookingInfo(combine);
      
        
   }

    

    return (
        <div className="pt-36 px-2">

            <h1 className="text-2xl font-extrabold py-8 text-center">Disease Name : {data.disease_name}</h1>

            <div >
                <img className="w-full  rounded-md pb-5 h-[80vh]" src={data.diseaseImage} alt="" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-between  gap-4 py-10 ">

                <div className="w-full md:order-1 order-2">

                    <div className="font-bold border-2 rounded-md md:px-5 px-2 pb-5 shadow-xl md:shadow-2xl pt-8 mb-5">

                        <h1 className="text-2xl pb-2">Doctor Name : {data.doctor_name}</h1>

                        <h1>Specialist Doctor : {data.doctor_specialist}</h1>


                    </div>

                    <div className="border-2 rounded-md md:px-5 px-2 pb-5 shadow-xl md:shadow-2xl ">

                        <h1 className="font-bold pt-10"> <span className="font-bold text-xl"> About {data.disease_name} :</span></h1>

                        <h1 className="font-semibold pt-10">
                            <span > {data.disease_info} </span>
                        </h1>

                    </div>



                </div>

                <div className="w-full order-1 md:order-2">

                    <div className="border-2 rounded-md md:px-5 px-2 pb-5 shadow-xl md:shadow-2xl pt-16 font-bold text-xl mb-3">

                        <h1 className="text-center">Doctor Visit Fee : ${data.doctor_visit_fee}</h1>

                    </div>


                    <div className="border-2 rounded-md md:px-5 px-2 pb-5 shadow-xl md:shadow-2xl pt-5">


                        <Form onSubmit={handleBooking}>

                            <h1 className="font-bold text-2xl text-center">Admit date & time</h1> <br />


                            <div className="grid grid-cols-2 justify-center gap-5">

                                <input type="date" name="date" id="" required className="input input-bordered" />

                                <input type="time" name="time" id="" required className="input input-bordered" />

                            </div>



                            <div className="flex justify-center">

                                <button disabled={role =='admin'} onClick={()=>setIsOpen(true)} className="btn bg-[green] font-bold text-white hover:bg-[red] w-3/4 md:w-1/2 my-4">

                                    <input type="submit" value='Confirm Appointment' className=" py-2 px-2" />

                                </button>

                            </div>

                        </Form>
                    </div>

                </div>



            </div>


                <BookingModal bookingInfo={bookingInfo}  isOpen={isOpen} closeModal={closeModal}></BookingModal>

        </div>
    );
};

export default Test_Details;