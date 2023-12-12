

import toast from "react-hot-toast";
import { MdAutoDelete } from "react-icons/md";
import { deleteUserData } from "../../../api/test";
const User_details = ({ singleUser, index }) => {

    const handleDelete=(email)=>{

             deleteUserData(email);
             toast.success('User delete successfully')
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
                                <img src={singleUser.image} />
                            </div>
                        </div>

                    </div>
                </td>

                <td>
                    <div>
                        <div className="font-bold">{singleUser.name}</div>

                    </div>
                </td>

                <td>
                    <div>
                        <div className="font-bold">{singleUser.email}</div>

                    </div>
                </td>
                <th>
                    <button className="btn btn-ghost btn-xs">{singleUser.status}</button>
                </th>

                <th>
                    <button onClick={()=>handleDelete(singleUser.email)} className="btn btn-secondary text-base "><MdAutoDelete></MdAutoDelete></button>
                </th>
            </tr>

        </tbody>
    );
};

export default User_details;