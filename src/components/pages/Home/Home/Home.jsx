import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import PopularMenu from "../PopularMenu/PopularMenu";
import Poster from "../Poster/Poster";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div className="bg-white">
             <Helmet>
                <title>Home || Red Gold Restaurants</title>
            </Helmet>
            <div>
                <Banner />
            </div>
            <div className="w-[1320px] mx-auto pb-10">
                <Category />
            </div>
            <div className="w-[1320px] mx-auto">
                <Poster />
            </div>
            <div className="w-[1320px] mx-auto py-10">
                <PopularMenu />
            </div>
            <div className="w-[1320px] mx-auto py-10">
                <Contact />
            </div>
            <div className="w-[1320px] mx-auto py-10">
                <ChefRecommend />
            </div>
            <div className="py-20">
                <Featured />
            </div>
            <div className="w-[1320px] mx-auto py-20">
                <Testimonials />
            </div>
        </div>
    );
};

export default Home;