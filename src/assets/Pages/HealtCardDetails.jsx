import { useLoaderData } from "react-router-dom";


const HealtCardDetails = () => {

    const blog = useLoaderData();

    return (
        <div className="pt-36 px-2">

            <h1 className="text-2xl font-extrabold py-8 text-center"> {blog.title}</h1>

            <div >
                <img className="w-full  rounded-md  h-[80vh]" src={blog.image} alt="" />
            </div>


            <div className="mt-12 space-y-3">


                <div className="flex items-center gap-4 font-bold text-xl">
                    <h1>Time : {blog.time}</h1>
                    <h1>Date : {blog.date}</h1>
                </div>


                <h1 className="font-extrabold text-2xl pb-8 pt-2">Author : {blog.name}</h1>

                <h1 className="font-semibold pb-28">{blog.info}</h1>




            </div>



        </div>
    );
};

export default HealtCardDetails;