import { MdAutoDelete } from "react-icons/md";
import { deleteBlogs } from "../../../api/test";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IoTimeSharp } from "react-icons/io5";

const BlogsDetails = ({ singleBlog, index }) => {

    const navigate = useNavigate();

    const handleDelete = async (id) => {

        await deleteBlogs(id)

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
                                <img src={singleBlog.image} />
                            </div>
                        </div>

                    </div>
                </td>

                <td>
                    <div>
                        <div className="font-bold">{singleBlog.title}</div>

                    </div>
                </td>

                <td>
                    <div>
                        <div className="font-bold">{singleBlog.name}</div>

                    </div>
                </td>
                <th>
                    <div>
                        <div className="flex gap-2 items-center">
                            <IoTimeSharp className="text-xl" />
                            <h1>{singleBlog.time}</h1>
                        </div>
                        <h1>{singleBlog.date}</h1>
                    </div>
                </th>

                <th>
                    <button onClick={() => handleDelete(singleBlog._id)} className="btn btn-secondary text-base "><MdAutoDelete></MdAutoDelete></button>
                </th>
            </tr>

        </tbody>
    );
};

export default BlogsDetails;