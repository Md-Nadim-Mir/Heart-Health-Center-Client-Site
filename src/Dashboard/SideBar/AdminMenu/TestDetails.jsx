import { MdAutoDelete } from "react-icons/md";
import { deleteTest } from "../../../api/test";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const TestDetails = ({ singleUser, index }) => {

    const navigate=useNavigate();

    const handleDelete=async(id)=>{

        await deleteTest(id);
        toast.success('Successfully Test Delete')
        navigate('/dashboardLayout/statistics')
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
                                <img src={singleUser.diseaseImage} />
                            </div>
                        </div>

                    </div>
                </td>

                <td>
                    <div>
                        <div className="font-bold">{singleUser. disease_name}</div>

                    </div>
                </td>

                <td>
                    <div>
                        <div className="font-bold">{singleUser.doctor_name}</div>

                    </div>
                </td>
                <th>
                    <button className="btn btn-ghost btn-xs">{singleUser.doctor_specialist}</button>
                </th>

                <th>
                    <button onClick={()=>handleDelete(singleUser._id)} className="btn btn-secondary text-base "><MdAutoDelete></MdAutoDelete></button>
                </th>
            </tr>

        </tbody>
    );
};

export default TestDetails;