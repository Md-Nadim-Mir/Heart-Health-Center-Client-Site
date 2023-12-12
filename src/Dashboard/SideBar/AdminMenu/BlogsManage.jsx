import { Helmet } from "react-helmet-async";
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { UploadImage } from "../../../api/UploadImage";

import toast from "react-hot-toast";
import axiosPublic from "../../../api";
import BlogsDetails from "./BlogsDetails";



const BlogsManage = () => {

    const navigate=useNavigate();
    const allBlogs=useLoaderData();


    const handleSubmit= async (e)=>{

        e.preventDefault();

          const title = e.target.blog_title.value;
          const name = e.target.author_name.value;
          const time = e.target.posting_time.value;
          const date = e.target.posting_date.value;
          const info = e.target.blog_info.value;
          const photo = e.target.photo.files[0];
        
         
          
          try{
              
            //  upload image into imgbb
            const imageData = await UploadImage(photo);
            const image = imageData?.data?.display_url;

            const blogBio= {title,name,time,date,info,image}
            // console.log(blogBio)

            axiosPublic.post('/blogs',blogBio)
            .then(data=>{
                console.log(data);
                toast.success('Blogs Added Successfully');
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
                    <title>Blogs Manage | Dashboard </title>
                </Helmet>
            </div>

            <h1 className="text-center text-3xl font-extrabold md:pt-12 pt-12">
                New Blogs Add
            </h1>


            {/* Form  */}

            <Form onSubmit={handleSubmit} className="shadow-2xl md:px-8 px-2 py-10 rounded-md mt-5 md:mt-12 space-y-4 font-bold text-black">

                {/* row 1 */}

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-between gap-x-2  '>




                    {/* doctor's name */}
                    <div className='flex flex-col  gap-2 mb-2'>

                        <label className='text-[18px] font-bold px-2 text-black'>Blogs Title</label>

                        <input type="text" name="blog_title" placeholder="Doctor's Name" id="" required className='text-base text-black md:w-full  p-2 rounded-lg input input-bordered  font-bold ' />

                    </div>


                    {/* specialist doctor's */}

                    <div className='flex flex-col  gap-2 mb-2'>

                        <label className='text-[18px] font-bold px-2 text-black'>Author Name</label>

                        <input type="text" name="author_name" placeholder="Doctor's Specialist" id="" required className='text-base text-black md:w-full  p-2 rounded-lg input input-bordered  font-bold ' />

                    </div>

                    {/* doctor's educational status */}

                    <div className='flex flex-col  gap-2 mb-2'>

                        <label className='text-[18px] font-bold px-2 text-black'>Posting Time</label>

                        <input type="time" name="posting_time" placeholder="Doctor Educational Status" id="" required className='text-base text-black md:w-full  p-2 rounded-lg input input-bordered  font-bold ' />

                    </div>


                    {/* doctor's working status */}

                    <div className='flex flex-col  gap-2 mb-2'>

                        <label className='text-[18px] font-bold px-2 text-black'>Posting Date</label>

                        <input type="date" name="posting_date" placeholder="Doctor Job Status" id="" required className='text-base text-black md:w-full  p-2 rounded-lg input input-bordered  font-bold ' />

                    </div>



                </div>

                {/* row 2 */}

                <div className='flex flex-col md:flex-row justify-between gap-x-2 '>





                    {/* disease info */}
                    <div className='flex flex-col  gap-2 mb-2'>

                        <label className='text-[18px] font-bold px-2 text-black'>Blogs Details Informations </label>

                        <textarea placeholder="Bio" name="blog_info" aria-required className="textarea textarea-bordered textarea-xs  md:w-[200px] lg:w-[330px] xl:w-[800px] h-[100px] text-base" ></textarea>

                    </div>


                    <div className="flex-col gap-2">

                        {/* photo */}
                        <div className='flex flex-col  gap-2 mb-2'>

                            <label className='text-[18px] font-bold px-2 text-black'>Disease Photo </label>

                            <input type="file" name="photo" id="" required className='text-base  md:w-full  p-2 rounded-lg input input-bordered  font-bold text-black' />

                        </div>

                        <div>
                            <button type='submit' className="text-center font-bold btn bg-[green] hover:bg-[red] text-white w-full">Add New Blogs</button>
                        </div>


                    </div>



                </div>

            </Form>


            {/* all test show table frmat */}


            <h1 className="text-center text-3xl font-extrabold md:pt-12 pt-12 mt-14">
                All Blog List 
            </h1>


            {/*  all test show in table format */}

            <div className="overflow-x-auto mt-16 shadow-2xl px-2 md:px-10 py-10 rounded-md mb-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Time & Date</th>
                            <th>Delete</th>
                            
                        </tr>
                    </thead>

                     {
                       allBlogs.map((singleBlog, index) => <BlogsDetails index={index} key={singleBlog._id} singleBlog={singleBlog}></BlogsDetails>)
                    }




                </table>
            </div>




        </div>
    );
};

export default BlogsManage;