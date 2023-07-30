import BannerSec from "../../../ReuseCompo/Banner/BannerSec";
import pizza from '../../../../assets/menu/pizza-bg.jpg';
import PopularItems from "../../Home/PopularItems/PopularItems";
import useMenu from "../../../CustomHook/useMenu/useMenu";
import { Link } from "react-router-dom";

const Pizza = () => {
    const { menu } = useMenu();
    const pizzas = menu?.filter(item => item.category === 'Pizza');
    return (
        <div>
            <BannerSec
                img={pizza}
                posterHeading={"pizza"}
                text={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            />
            <div className="py-10 w-[1320px] mx-auto">
                <div className="grid md:grid-cols-2 gap-3">
                    {pizzas &&
                        pizzas.map(item => <PopularItems
                            key={item._id}
                            item={item}
                        ></PopularItems>)
                    }
                </div>
                <Link to="/order/pizza">
                    <button className="border-b-4 border-black text-2xl font-semibold
              text-black hover:bg-slate-100 rounded-lg my-10 
              uppercase px-5 py-3 ">
                        ORDER YOUR FAVOURITE Pizza
                    </button></Link>
            </div>
        </div>
    );
};

export default Pizza;