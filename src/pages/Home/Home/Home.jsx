import Popular from "../../Popular/Popular";
import PopularInstructor from "../../PopularInstructor/PopularInstructor";
import Slider from "../Slider/Slider";

import Swipers from "../Swipers/Swipers";



const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <Popular></Popular>
           <Swipers></Swipers>
           <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;