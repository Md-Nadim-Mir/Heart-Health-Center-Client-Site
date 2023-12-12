

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

import quote from '../../../public/quote.svg'

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonial = () => {

    let [testmonial, setTestomonial] = useState([]);

    useEffect(() => {

        fetch('review.json')
            .then(res => res.json())
            .then(data => setTestomonial(data))

    }, [])



    return (

        <div>


            <h1 className="text-3xl font-bold text-center pt-16">Patient Review</h1>



            <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">

                {
                    testmonial.map(t => <div key={t._id}>



                        <SwiperSlide className="text-center md:py-10 space-y-5">

                            <div className="flex justify-center">

                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={t.rating}
                                    readOnly
                                />

                            </div>

                            <div className="flex justify-center py-3">
                                <img src={quote} alt="" />
                            </div>

                            <div>

                                <p className="md:px-24">{t.details}</p>
                                <p className="text-3xl font-bold">{t.name}</p>


                            </div>

                        </SwiperSlide>



                    </div>)
                }

            </Swiper>


        </div>
    );
};

export default Testimonial;