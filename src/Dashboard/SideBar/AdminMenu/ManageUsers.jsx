import { useLoaderData } from "react-router-dom";
import User_details from "./User_details";
import { Helmet } from "react-helmet-async";


const ManageUsers = () => {
    const allUser = useLoaderData();
    const user = allUser.filter(u => u.role == 'user')
    return (
        <div>

            <div>
                <Helmet>
                    <title> Manage User | Dashboard </title>
                </Helmet>
            </div>

            {
                user ? <h1 className="text-center text-3xl font-extrabold md:pt-12">All Users: {user.length}</h1> : <h1>Menu users: 0 </h1>
            }

            {/*  user data show in table format */}

            <div className="overflow-x-auto mt-16">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Delete</th>
                            
                        </tr>
                    </thead>

                    {
                        user.map((singleUser, index) => <User_details index={index} key={singleUser._id} singleUser={singleUser}></User_details>)
                    }




                </table>
            </div>
        </div>
    );
};

export default ManageUsers;