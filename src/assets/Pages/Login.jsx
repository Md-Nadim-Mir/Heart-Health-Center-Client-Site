import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Form, Link,  useLocation,  useNavigate } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";
import { getToken } from "../../api/auth";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";


const Login = () => {

    const { signIn , loading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from= location?.state?.from?.pathname || '/'

    const handleSubmit = async(e) => {

        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;


        console.log(email, password);

        try {

           

            // create user or registration
            await signIn(email, password);

          
            // save token 

            await getToken(email);
            toast.success('User Login successfully');

            navigate(from , {replace:true})

        }

        catch (error) {

            toast.error(error.message)

        }


    }


    return (
        <div className='max-w-[1300px] mx-auto'>

            <Helmet>
                <title> Heart Health Center | Login </title>
            </Helmet>

            <Navbar></Navbar>


            <div className="pt-40 pb-20">

                <div className='text-white shadow-2xl card xl:mx-80 lg:mx-28 md:mx-10 mx-5 border-2 pt-5 pb-5 my-12'>

                    <h1 className='text-3xl font-bold text-center pt-10 text-black'> Please Login ! </h1>

                    <Form onSubmit={handleSubmit} className='py-10 px-2'>


                        {/* row 1 */}

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



                        {/* row-5 */}
                        <div className='flex justify-center mt-12'>
                        {
                               loading ? <button className="btn"><ImSpinner9 className="animate-spin mx-atuo text-xl text-[#ba3d3d]"></ImSpinner9></button> :

                                <button type="submit" className='btn text-[white] font-bold bg-[green] hover:bg-[red]  text-[18px]'>
                                    Login

                                </button>
                                
                            }

                        </div>



                        <div className='border-t-2 mt-12 border-orange-400 md:mx-24 mx-5'>

                        </div>










                        {/* row-6 */}

                        <p className="font-bold text-center  pt-4 text-[16px] md:text-[20px] text-black">New to Website ? Please <Link className="text-[green] font-extrabold" to='/register'> Register</Link> </p>

                    </Form>

                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default Login;