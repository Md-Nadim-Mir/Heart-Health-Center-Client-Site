import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { UploadImage } from "../../../api/UploadImage";
import toast from "react-hot-toast";
import axiosPublic from "../../../api";
import { Helmet } from "react-helmet-async";
import TestDetails from "./TestDetails";


const TestsManage = () => {

    const allTest = useLoaderData();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        const doctor_name = e.target.doctor_name.value;
        const doctor_specialist = e.target.doctor_specialist.value;
        const disease_name = e.target.disease_name.value;
        const disease_info = e.target.disease_info.value;
        const doctor_visit_fee = e.target.doctor_visit_fee.value;
        const image = e.target.photo.files[0];



        try {

            // upload image into imgbb
            const imageData = await UploadImage(image);
            const realImage = imageData?.data?.display_url;

            console.log(doctor_name, doctor_specialist, disease_info, disease_name, doctor_visit_fee, realImage);

            const tests_info = {

                doctor_name: doctor_name,
                doctor_specialist: doctor_specialist,
                disease_info: disease_info,
                disease_name: disease_name,
                doctor_visit_fee: doctor_visit_fee,
                diseaseImage: realImage

            }

            console.log(tests_info);

            axiosPublic.post('/all_tests', tests_info)
                .then(res => {
                    console.log(res)
                    toast.success('Tests added successfully');
                    navigate('/dashboardLayout/statistics') 

                })
                .then(error => console.log(error.message))
        }

        catch (error) {

            toast.error(error.message)
        }

    }

    return (
        <div>

            <div>
                <Helmet>
                    <title> Test Manage | Dashboard </title>
                </Helmet>
            </div>

            <h1 className="text-center text-3xl font-extrabold md:pt-12 pt-12">
                New Tests Add
            </h1>


            {/* Form  */}

            <Form onSubmit={handleSubmit} className="shadow-2xl md:px-8 px-2 py-10 rounded-md mt-5 md:mt-12 space-y-4 font-bold text-black">

                {/* row 1 */}

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-between gap-x-2  '>


                    {/* disease name*/}
                    <div className='flex flex-col  gap-2 mb-2'>

                        <label className='text-[18px] font-bold px-2 text-black'>Disease Name </label>

                        <input type="text" name="disease_name" placeholder='Disease Name ' id="" required className='text-base  md:w-full  p-2 rounded-lg input input-bordered  font-bold text-black' />

                    </div>




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

                    {/* doctor's fee */}

                    <div className='flex flex-col  gap-2 mb-2'>

                        <label className='text-[18px] font-bold px-2 text-black'>Doctor Visiting Fee</label>

                        <input type="text" name="doctor_visit_fee" placeholder="Doctor's Specialist" id="" required className='text-base text-black md:w-full  p-2 rounded-lg input input-bordered  font-bold ' />

                    </div>



                </div>

                {/* row 2 */}

                <div className='flex flex-col md:flex-row justify-between gap-x-2 '>





                    {/* disease info */}
                    <div className='flex flex-col  gap-2 mb-2'>

                        <label className='text-[18px] font-bold px-2 text-black'>Disease Info </label>

                        <textarea placeholder="Bio" name="disease_info" aria-required className="textarea textarea-bordered textarea-xs  md:w-[200px] lg:w-[330px] xl:w-[800px] h-[100px] font-base" ></textarea>

                    </div>


                    <div className="flex-col gap-2">

                        {/* photo */}
                        <div className='flex flex-col  gap-2 mb-2'>

                            <label className='text-[18px] font-bold px-2 text-black'>Disease Photo </label>

                            <input type="file" name="photo" id="" required className='text-base  md:w-full  p-2 rounded-lg input input-bordered  font-bold text-black' />

                        </div>

                        <div>
                            <button type='submit' className="text-center font-bold btn bg-[green] hover:bg-[red] text-white w-full">Add New Tests</button>
                        </div>


                    </div>



                </div>

            </Form>


            {/* all test show table frmat */}


            <h1 className="text-center text-3xl font-extrabold md:pt-12 pt-12 mt-14">
                All Tests List
            </h1>


            {/*  all test show in table format */}

            <div className="overflow-x-auto mt-16 shadow-2xl px-2 md:px-10 py-10 rounded-md mb-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Disease Name</th>
                            <th>Doctor</th>
                            <th>Specialist</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                    </thead>

                    {
                        allTest.map((singleUser, index) => <TestDetails index={index} key={singleUser._id} singleUser={singleUser}></TestDetails>)
                    }




                </table>
            </div>




        </div>
    );
};

export default TestsManage;