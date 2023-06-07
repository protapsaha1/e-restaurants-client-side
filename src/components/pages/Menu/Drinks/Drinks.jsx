import useMenu from "../../../CustomHook/useMenu/useMenu";
import drink from '../../../../assets/menu/drinks.jpeg';
import BannerSec from "../../../ReuseCompo/Banner/BannerSec";
import PopularItems from "../../Home/PopularItems/PopularItems";
import { Link } from "react-router-dom";

const Drinks = () => {
    const [menu] = useMenu();
    const drinks = menu.filter(item => item.category === 'Drinks');
    return (
        <div>
            <BannerSec
                img={drink}
                posterHeading={"Drinks"}
                text={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            />
            <div className="py-10 w-[1320px] mx-auto">
                <div className="grid md:grid-cols-2 gap-3">
                    {
                        drinks.map(item => <PopularItems
                            key={item._id}
                            item={item}
                        ></PopularItems>)
                    }
                </div>
            </div>
            <Link to="/order/drinks">
                <button className="border-b-4 border-black text-2xl font-semibold
              text-black hover:bg-slate-100 rounded-lg my-10 ms-80
              uppercase px-5 py-3 ">
                    ORDER YOUR FAVOURITE drink
                </button>
            </Link>
        </div>

    );
};

export default Drinks;