import { MdAutoDelete } from "react-icons/md";
import { deleteDoctor } from "../../../api/test";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const DoctorDetails = ({ singleDoctor, index }) => {

    const navigate=useNavigate();

    const handleDelete=async(id)=>{

         await deleteDoctor(id)

         toast.success('Doctor Delete Successfully')
         navigate('/dashboardLayout/statistics')
         
        console.log(id)
    }



    return (
        <tbody>

            {/* row 1 */}
            <tr>
                <th> {index + 1}</th>

                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={singleDoctor.image} />
                            </div>
                        </div>

                    </div>
                </td>

                <td>
                    <div>
                        <div className="font-bold">{singleDoctor.name}</div>

                    </div>
                </td>

                <td>
                    <div>
                        <div className="font-bold">{singleDoctor.specialist}</div>

                    </div>
                </td>
                <th>
                    <button className="btn btn-ghost btn-xs">{singleDoctor.job_status}</button>
                </th>

                <th>
                    <button onClick={()=>handleDelete(singleDoctor._id)} className="btn btn-secondary text-base "><MdAutoDelete></MdAutoDelete></button>
                </th>
            </tr>

        </tbody>
    );
};

export default DoctorDetails;