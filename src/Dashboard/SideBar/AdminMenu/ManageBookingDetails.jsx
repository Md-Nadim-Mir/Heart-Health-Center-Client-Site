

import toast from "react-hot-toast";
import { MdAutoDelete } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import { deleteBookingInfo } from "../../../api/booking";
import { useNavigate } from "react-router-dom";
const ManageBookingDetails = ({ booking, index }) => {

    const navigate =useNavigate();

    const handleDelete=(id)=>{

             deleteBookingInfo(id);
             toast.success('Booking delete successfully');
             navigate('/dashboardLayout/statistics')
    }

    return (

        <tbody className="mt-5">

            {/* row 1 */}
            <tr>
                <th> {index + 1}</th>

                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={booking.disease_image} />
                            </div>
                        </div>

                    </div>
                </td>

                <td>
                    <div>
                        <div className="font-bold">{booking.disease_name}</div>

                    </div>
                </td>

                <td>
                    <div>
                        <div className="font-bold">{booking.doctor_name}</div>

                    </div>
                </td>
                <th>
                    <button className="btn btn-ghost btn-xs">${booking.doctor_visit_fee}</button>
                </th>

                <th>
                    <div>
                        <div className="flex gap-2 items-center">
                            <IoTimeSharp className="text-xl" />
                            <h1>{booking.time}</h1>
                        </div>
                        <h1>{booking.date}</h1>
                    </div>
                </th>

                <th>
                    <button onClick={()=>handleDelete(booking._id)} className="btn btn-secondary text-base "><MdAutoDelete></MdAutoDelete></button>
                </th>
            </tr>

        </tbody>
    );
};

export default ManageBookingDetails;