import { Helmet } from "react-helmet-async";
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { UploadImage } from "../../../api/UploadImage";

import toast from "react-hot-toast";
import axiosPublic from "../../../api";
import DoctorDetails from "./DoctorDetails";


const DoctorManage = () => {

    const navigate=useNavigate();
    const alldoctor=useLoaderData();


    const handleSubmit= async (e)=>{

        e.preventDefault();

          const name = e.target.doctor_name.value;
          const specialist = e.target.doctor_specialist.value;
          const educational_status = e.target.doctor_educational_status.value;
          const job_status = e.target.doctor_job_status.value;
          const info = e.target.doctor_info.value;
          const photo = e.target.photo.files[0];
        
         
          
          try{
              
            //  upload image into imgbb
            const imageData = await UploadImage(photo);
            const image = imageData?.data?.display_url;

            const doctorBio= {name,specialist,educational_status,job_status,info,image}

            axiosPublic.post('/doctors',doctorBio)
            .then(data=>{
                console.log(data);
                toast.success('Doctor Added Successfully');
                navigate('/dashboardLayout/statistics')
                e.target.reset();
            })

          }

          catch(error){
               
               console.log(error.message)
              
          }
    }


    return (
        <div>

            <div>
                <Helmet>
                    <title> Doctor Manage | Dashboard </title>
                </Helmet>
            </div>

            <h1 className="text-center text-3xl font-extrabold md:pt-12 pt-12">
                New Doctors Add
            </h1>


            {/* Form  */}

            <Form onSubmit={handleSubmit} className="shadow-2xl md:px-8 px-2 py-10 rounded-md mt-5 md:mt-12 space-y-4 font-bold text-black">

                {/* row 1 */}

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-between gap-x-2  '>




                    {/* doctor's name */}
                    <div className='flex flex-col  gap-2 mb-2'>

                        <label className='text-[18px] font-bold px-2 text-black'>Doctor Name</label>

                        <input type="text" name="doctor_name" placeholder="Doctor's Name" id="" required className='text-base text-black md:w-full  p-2 rounded-lg input input-bordered  font-bold ' />

                    </div>


                    {/* specialist doctor's */}

                    <div className='flex flex-col  gap-2 mb-2'>

                        <label className='text-[18px] font-bold px-2 text-black'>Doctor Specialist</label>

                        <input type="text" name="doctor_specialist" placeholder="Doctor's Specialist" id="" required className='text-base text-black md:w-full  p-2 rounded-lg input input-bordered  font-bold ' />

                    </div>

                    {/* doctor's educational status */}

                    <div className='flex flex-col  gap-2 mb-2'>

                        <label className='text-[18px] font-bold px-2 text-black'>Doctor Educational Status</label>

                        <input type="text" name="doctor_educational_status" placeholder="Doctor Educational Status" id="" required className='text-base text-black md:w-full  p-2 rounded-lg input input-bordered  font-bold ' />

                    </div>


                    {/* doctor's working status */}

                    <div className='flex flex-col  gap-2 mb-2'>

                        <label className='text-[18px] font-bold px-2 text-black'>Doctor Job Status</label>

                        <input type="text" name="doctor_job_status" placeholder="Doctor Job Status" id="" required className='text-base text-black md:w-full  p-2 rounded-lg input input-bordered  font-bold ' />

                    </div>



                </div>

                {/* row 2 */}

                <div className='flex flex-col md:flex-row justify-between gap-x-2 '>





                    {/* disease info */}
                    <div className='flex flex-col  gap-2 mb-2'>

                        <label className='text-[18px] font-bold px-2 text-black'>Info of Doctors </label>

                        <textarea placeholder="Bio" name="doctor_info" aria-required className="textarea textarea-bordered textarea-xs  md:w-[200px] lg:w-[330px] xl:w-[800px] h-[100px] text-base" ></textarea>

                    </div>


                    <div className="flex-col gap-2">

                        {/* photo */}
                        <div className='flex flex-col  gap-2 mb-2'>

                            <label className='text-[18px] font-bold px-2 text-black'>Disease Photo </label>

                            <input type="file" name="photo" id="" required className='text-base  md:w-full  p-2 rounded-lg input input-bordered  font-bold text-black' />

                        </div>

                        <div>
                            <button type='submit' className="text-center font-bold btn bg-[green] hover:bg-[red] text-white w-full">Add New Doctors</button>
                        </div>


                    </div>



                </div>

            </Form>


            {/* all test show table frmat */}


            <h1 className="text-center text-3xl font-extrabold md:pt-12 pt-12 mt-14">
                All Doctor List 
            </h1>


            {/*  all test show in table format */}

            <div className="overflow-x-auto mt-16 shadow-2xl px-2 md:px-10 py-10 rounded-md mb-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Doctor Name</th>
                            <th>Specialist</th>
                            <th>Job Status</th>
                            <th>Delete</th>
                            
                        </tr>
                    </thead>

                    {
                        alldoctor.map((singleDoctor, index) => <DoctorDetails index={index} key={singleDoctor._id} singleDoctor={singleDoctor}></DoctorDetails>)
                    }




                </table>
            </div>




        </div>
    );
};

export default DoctorManage;