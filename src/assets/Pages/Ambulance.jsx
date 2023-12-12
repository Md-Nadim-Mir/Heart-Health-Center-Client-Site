import { Helmet } from "react-helmet-async";


const Ambulance = () => {
    return (
        <div className="pb-10 pt-32 px-2">
            
              <Helmet>
                        <title> Heart Health Center | Ambulance </title>
              </Helmet>

             <h1 className="text-3xl font-bold text-center pt-16 pb-10">24/7 AMBULANCE SERVICE</h1>

             <div className="grid grid-cols-1 md:grid-cols-2  mt-10 mb-5 px-2">

                  <img src="https://i.ibb.co/YW0xdnT/ambulance.jpg" alt="" />

                  <div className="space-y-4">
                        <h1 className="text-xl font-bold">Emergency Ambulance Service</h1>

                        <h1 className="font-semibold">Need ambulance service near you? We provide the reliable high standard emergency ambulance service with life support and freezing support. Our ambulance has been successfully serving 24/7 service all over the country since many years. We provide different types of ambulance (AC, Non AC, Freezer and ICU) service. We are always ready to provide an ambulance service for you or your relative patients and the dead body. Our ambulance services near you to help you out in your hours of need to go anywhere in Bangladesh.</h1>

                        <button className="btn  bg-[green] hover:bg-[red] border:none text-white  font-extrabold ">Contract Us</button>
                  </div>
             </div>
        </div>
    );
};

export default Ambulance;