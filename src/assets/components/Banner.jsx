import { Link } from "react-router-dom";


const Banner = () => {

    const img = 'https://i.ibb.co/tXtZQjM/banner1.jpg'
    const img1 = 'https://i.ibb.co/Cwprrkr/banner2.webp'

    
    return (

        <div>

            <div className="carousel w-full h-[70vh]  rounded-lg my-4 ">

                <div id="slide1" style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="carousel-item relative w-full ">


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>

                    <div className="absolute top-20 left-10 md:left-60  lg:left-80 xl:right-80  space-y-1">
                       
                        <h1 className="font-bold text-5xl text-black ">Blood Test</h1>

                        <h1><span className="text-2xl text-[red] font-bold">20% discount</span></h1>

                        <h1 className="text-2xl text-[red] font-semibold">Cupon Code : <span className=" font-extrabold text-xl">Heart100</span> </h1>


                        <Link to='/test'>
                            <button className="btn mt-4 text-white  bg-[green] border-none font-bold hover:bg-[red]">Apoint</button>
                        </Link>

                    </div>

                </div>

                <div id="slide2" style={{ backgroundImage: `url(${img1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="carousel-item relative w-full ">


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>

                    <div className="absolute top-20 left-10 md:left-60  lg:left-80 xl:right-right-80  space-y-1">
                       
                        <h1 className="font-bold text-5xl text-black ">Ratina Test</h1>

                        <h1><span className="text-2xl text-[red] font-bold">35% discount</span></h1>

                        <h1 className="text-2xl text-[red] font-semibold">Cupon Code : <span className=" font-extrabold text-xl">Heart100</span> </h1>

                        <Link to='/test'>
                            <button className="btn mt-4 text-white  bg-[green] border-none font-bold hover:bg-[red]">Apoint</button>
                        </Link>

                    </div>

                </div>

                

            </div>

        </div>
    );
};

export default Banner;