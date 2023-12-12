import { Helmet } from "react-helmet-async";
import FeatureTest from "../components/FeatureTest";


const Test = () => {
    return (
        <div className="pb-10 pt-32">

              <Helmet>
                        <title> Heart Health Center | All Test </title>
              </Helmet>

             <FeatureTest></FeatureTest>
        </div>
    );
};

export default Test;