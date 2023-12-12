import { Link } from "react-router-dom";


const HealthCard = ({ blog }) => {

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className="h-[260px] w-full" src={blog.image} /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{blog.title}</h2>
                <p>{blog.info.slice(0, 100)}</p>


                <div className="card-actions   mt-5">

                    <Link to={`/healthCard-details/${blog._id}`}>

                        <button className="btn  bg-[green] hover:bg-[red] border:none text-white  font-extrabold text-base">Read More . . .</button>

                    </Link>

                </div>

            </div>
        </div>
    );
};

export default HealthCard;