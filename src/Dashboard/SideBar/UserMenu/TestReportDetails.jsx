


import { MdAutoDelete } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";


const TestReportDetails = ({ booking, index }) => {

 

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

            
                <th>
                    <button className="btn btn-ghost btn-xs text-[red] text-[14px] font-bold">pending</button>
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

                {/* <th>
                    <button onClick={()=>handleDelete(booking._id)} className="btn btn-secondary text-base "><MdAutoDelete></MdAutoDelete></button>
                </th> */}
            </tr>

        </tbody>
    );
};

export default TestReportDetails;