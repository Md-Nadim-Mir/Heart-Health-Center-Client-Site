import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { getAllBookingInfo } from "../../../api/booking";
import { Helmet } from "react-helmet-async";
import ManageBookingDetails from "./ManageBookingDetails";



const ManageBooking = () => {

    const { user } = useAuth();

    let [booking, setBooking] = useState([]);

    useEffect(() => {

        getAllBookingInfo(user?.email)
            .then(data => setBooking(data))
    }, [])


    return (
        <div>

            <div>
                <Helmet>
                    <title> Manage Bookings | Dashboard </title>
                </Helmet>
            </div>

            {
                booking ? <h1 className="text-center text-3xl font-extrabold md:pt-12">All Booking: {user.length}</h1> : <h1>All Booking: 0 </h1>
            }

            {/*  user data show in table format */}

            <div className="overflow-x-auto mt-16">
                <table className="table">
                    {/* head */}
                    <thead className="shadow-xl border-2 rounded-xl p-2">
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Disease Name</th>
                            <th>Doctor Name </th>
                            <th>Fee </th>
                            <th>Data & Time </th>
                            <th>Delete</th>

                        </tr>
                    </thead>

                    {
                        booking.map((booking, index) => <ManageBookingDetails index={index} key={booking._id} booking={booking}></ManageBookingDetails>)
                    }




                </table>
            </div>
        </div>
    );
};

export default ManageBooking;