import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const FeatureTest = () => {

    const [test, setTest] = useState([]);

    
  

    useEffect(() => {

        fetch('https://server-lyart-ten.vercel.app/all_tests')
            .then(res => res.json())
            .then(data => {
              
                setTest(data)
            })


    }, [])




    return (

        <div className="my-5 pt-16">

            <h1 className="text-3xl font-bold text-center">Featured Test </h1>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-16 px-2">

                {
                    test.map(t => <div key={t.id} className="card w-full bg-base-100 shadow-xl ">

                        <figure><img className="h-[260px] w-full hover:scale-105" src={t.diseaseImage} alt="Shoes" /></figure>

                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">{t.disease_name}</h2>

                            <p>{t.disease_info.slice(0, 100)}</p>


                            <div className="card-actions  mt-5">

                                <Link to={`/test-details/${t._id}`}>

                                    <button className="btn w-full bg-[green] hover:bg-[red] border:none text-white  font-extrabold text-base ">Details Know</button>

                                </Link>

                            </div>

                        </div>

                    </div>)
                }






            </div>
        </div>
    );
};

export default FeatureTest;