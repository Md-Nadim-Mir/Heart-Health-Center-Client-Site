

const DoctorCard = ({doctor}) => {

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className="h-[260px] w-full" src={doctor.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{doctor.name}</h2>

                <p>{doctor.specialist}</p>
                <p>{doctor.educational_status}</p>
                <p>{doctor.job_status}</p>
{/* 
                <div className="card-actions  border-2 mt-5">
                    <button className="btn w-full bg-[green] hover:bg-[red] border:none text-white  font-extrabold text-base">Appoint Now</button>
                </div> */}
            </div>
        </div>
    );
};

export default DoctorCard;