import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Form, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from 'react-hot-toast'
import { ImSpinner9 } from "react-icons/im";

import { UploadImage } from "../../api/UploadImage";
import useAuth from "../../Hooks/useAuth";
import { getToken, savUser } from "../../api/auth";


// const image_Hosting_Key = ;
// const image_hosting_api = 


const Register = () => {


    const { createUser, updateUserProfile, loading } = useAuth()

    const navigate = useNavigate();


    // Sample data for districts and upazilas
    const districts = ['Dhaka', 'Chittagong', 'Rajshahi', 'Barisal', 'Khulna', 'Rangpur', 'Sylhet'];
    const upazilas = {
        Dhaka: ['Gulshan', 'Banani', 'Mirpur', 'Savar', 'Badda', 'Gazipur'],
        Chittagong: ['Chandgaon', 'Halishahar', 'Pahartoli'],
        Rajshahi: ['Motihar', 'Shah Makhdum', 'Tanor'],
        Barisal: ['Babuganj', 'Bakerganj', 'Banaripara'],
        Khulna: ['Dumuria', 'Digulia', 'Koyra', 'Rupsha', 'Paikgacha'],
        Rangpur: ['Mitapukur', 'Taragonj', 'Pirgonj', 'Kaunia'],
        Sylhet: ['Balagonj', 'Biyanibazar', 'Fakugong']

    };

    // sample data for blood 
    const bloods = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']

    // State to store selected district and upazila
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedUpazila, setSelectedUpazila] = useState('');
    const [selectedBlood, setSelectedBlood] = useState('');

    // Event handler for district selection
    const handleDistrictChange = (e) => {
        const district = e.target.value;
        setSelectedDistrict(district);
        // Reset selected upazila when district changes
        setSelectedUpazila('');
    };

    // Event handler for upazila selection
    const handleUpazilaChange = (e) => {
        const upazila = e.target.value;
        setSelectedUpazila(upazila);
    };

    // Event handler for blood selection
    const handleBloodChange = (e) => {
        const blood = e.target.value;
        setSelectedBlood(blood);
    };



    const handleSubmit = async (e) => {

        e.preventDefault();

        const name = e.target.name.value;
        const blood = e.target.blood.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const image = e.target.photo.files[0];

        try {

            // upload image
            const imageData = await UploadImage(image);

            // create user or registration
            await createUser(email, password);

            // upload image
            await updateUserProfile(name, imageData?.data?.display_url)

            const realImage = imageData?.data?.display_url;

            const userInfo = {
                name: name,
                email: email,
                image: realImage,
                blood: blood

            }

            //  save user data in database
            const dbResponse = await savUser(userInfo);

            console.log(dbResponse)

            // save token 

            await getToken(email);
            toast.success('User create successfully');

            navigate('/')

        }

        catch (error) {

            toast.error(error.message)

        }





    }

    return (
        <div className='max-w-[1300px] mx-auto'>

            <Helmet>
                <title> Heart Health Center | Register </title>
            </Helmet>

            <Navbar></Navbar>


            <div className="pt-60 pb-12">

                <div className='text-white shadow-2xl card xl:mx-80 lg:mx-28 md:mx-10 mx-5 border-2 pt-12  pb-10  mb-12 '>

                    <h1 className='text-3xl font-bold text-center  text-black '>Create an account </h1>

                    <Form onSubmit={handleSubmit} className='py-10 px-2 my-10'>




                        {/* row 2 */}

                        <div className='flex flex-col md:flex-row justify-center gap-x-12 '>


                            {/* email */}
                            <div className='flex flex-col  gap-2 mb-2'>

                                <label className='text-[18px] font-bold px-2 text-black'>Email </label>

                                <input type="text" name="email" placeholder='Enter Your Email' id="" required className='text-base  md:w-full  p-2 rounded-lg input input-bordered  font-bold text-black' />

                            </div>


                            {/* password */}
                            <div className='flex flex-col  gap-2 mb-2'>

                                <label className='text-[18px] font-bold px-2 text-black'>Password </label>

                                <input type="password" name="password" placeholder='Enter Password' id="" required className='text-base text-black md:w-full  p-2 rounded-lg input input-bordered  font-bold ' />

                            </div>



                        </div>






                        {/* row 1 */}

                        <div className='flex flex-col md:flex-row justify-center gap-x-12'>


                            {/* name */}
                            <div className='flex flex-col  gap-2 mb-2'>

                                <label className='text-[18px] font-bold px-2 text-black'>Name </label>

                                <input type="text" name="name" placeholder='Enter Your Full name' id="" required className='text-base  md:w-full  p-2 rounded-lg input input-bordered text-black font-bold ' />

                            </div>

                            {/* blood */}
                            <div className='flex flex-col  gap-2 mb-2'>

                                <label className='text-[18px] font-bold px-2 text-black'>Blood </label>

                                <select id='blood' value={selectedBlood} onChange={handleBloodChange} required className='text-base  md:w-[220px]  p-2 rounded-lg input input-bordered bg-[gray]  font-bold ' >

                                    <option disabled selected value="">-- Select Blood --</option>
                                    {bloods.map((blood) => (
                                        <option key={blood} value={blood}>
                                            {blood}
                                        </option>
                                    ))}

                                </select>



                            </div>





                        </div>






                        {/* row 4 */}

                        <div className='flex flex-col md:flex-row justify-center gap-x-12'>


                            {/* District */}
                            <div className='flex flex-col  gap-2 mb-2'>

                                <label className='text-[18px] font-bold px-2 text-black'>District </label>



                                <select id='district' value={selectedDistrict} onChange={handleDistrictChange} required className='text-base  md:w-[220px]  p-2 rounded-lg input input-bordered bg-[gray]  font-bold ' >

                                    <option disabled selected value="">-- Select District --</option>
                                    {districts.map((district) => (
                                        <option key={district} value={district}>
                                            {district}
                                        </option>
                                    ))}

                                </select>

                            </div>


                            {/* Upazila */}

                            {selectedDistrict &&
                                <div className='flex flex-col  gap-2 mb-2'>

                                    <label className='text-[18px] font-bold px-2 text-black'>Upazila </label>


                                    <select id="upazila" value={selectedUpazila} onChange={handleUpazilaChange} required className='text-base  md:w-[220px]  p-2 rounded-lg input input-bordered bg-[gray]  font-bold ' >

                                        <option disabled selected value="">-- Select Upazila --</option>

                                        {upazilas[selectedDistrict].map((upazila) => (
                                            <option key={upazila} value={upazila}>
                                                {upazila}
                                            </option>
                                        ))}
                                    </select>





                                </div>

                            }

                        </div>


                        {/* row-4 */}

                        <div className=" md:px-20">

                            {/* photo */}
                            <div className='from-control flex flex-col   gap-2 mb-2'>

                                <label className='text-[18px] font-bold px-2 text-black'>Photo </label>

                                <input type="file" name="photo" id="" required className='text-base  md:w-full  p-2 rounded-lg input input-bordered  font-bold text-black' />

                                {/* <input type="file" className="file-input w-full  p-2 rounded-lg input input-bordered text-black" /> */}

                            </div>

                        </div>



                        {/* border */}

                        <div className='border-t-2 mt-12 border-orange-400 md:mx-24 mx-5'>

                        </div>





                        {/* row-5 */}
                        <div className='flex justify-center mt-12'>

                            {
                               loading ? <button className="btn"><ImSpinner9 className="animate-spin mx-atuo text-xl text-[#ba3d3d]"></ImSpinner9></button> :

                                <button type="submit" className='btn text-[white] font-bold bg-[green] hover:bg-[red]  text-[18px]'>
                                    Register

                                </button>
                                
                            }

                        </div>




                        {/* row-5   */}

                        <div className="mt-5 flex flex-col md:flex-row text-center gap-2  justify-center">






                        </div>



                        {/* row-6 */}

                        <p className="font-bold text-center  pt-4 text-[16px] md:text-[20px] text-black">Already Have an account ? Please <Link className="text-[green] font-extrabold" to='/login'> Login</Link> </p>

                    </Form>

                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default Register;