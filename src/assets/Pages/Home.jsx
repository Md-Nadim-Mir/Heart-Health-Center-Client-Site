import Banner from "../components/Banner";
import DoctorList from "../components/DoctorList";
import FeatureTest from "../components/FeatureTest";
import Testimonial from "../components/Testimonial";


const Home = () => {
    return (
        <div className="pb-10 pt-32">
            <Banner></Banner>
            <FeatureTest></FeatureTest>
            <DoctorList></DoctorList>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;