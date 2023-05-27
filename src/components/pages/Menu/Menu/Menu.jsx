import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Offers from "../Offers/Offers";
import Desserts from "../Desserts/Desserts";
import Pizza from "../Pizza/Pizza";
import Salads from "../Salads/Salads";
import Soup from "../Soup/Soup";
import Drinks from "../Drinks/Drinks";

const Menu = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>Menu || Red Gold Restaurants</title>
            </Helmet>
            <div>
                <Banner />
            </div>
            <div className="w-[1320px] mx-auto pt-20 pb-10">
                <Offers />
            </div>
            <div>
                <Desserts />
            </div>
            <div>
                <Pizza />
            </div>
            <div>
                <Salads />
            </div>
            <div>
                <Soup />
            </div>
            <div>
                <Drinks />
            </div>
        </div>
    );
};

export default Menu;