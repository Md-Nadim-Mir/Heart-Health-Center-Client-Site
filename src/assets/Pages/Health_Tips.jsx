import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import HealthCard from "./HealthCard";



const Health_Tips = () => {

    const blogs = useLoaderData();

    return (

        <div className="pb-10 pt-32">

            <Helmet>
                <title>Heart Health Center | Health Tips </title>
            </Helmet>

            <h1 className="text-3xl font-bold text-center pt-16">Health Blog </h1>


            <div className="grid grid-cols-1 md:grid-cols-2  gap-10 pt-16 px-2 py-10">

              

                {
                      blogs.map(blog=><HealthCard key={blog._id} blog={blog}></HealthCard>)  
                }

                


            </div>
        </div>
    );
};

export default Health_Tips;