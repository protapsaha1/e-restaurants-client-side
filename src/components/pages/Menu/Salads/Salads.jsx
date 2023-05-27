import BannerSec from "../../../ReuseCompo/Banner/BannerSec";
import salad from '../../../../assets/menu/salad-bg.jpg';
import PopularItems from "../../Home/PopularItems/PopularItems";
import useMenu from "../../../CustomHook/useMenu/useMenu";
import { Link } from "react-router-dom";

const Salads = () => {
    const [menu] = useMenu();
    const salads = menu.filter(item => item.category === 'salad');
    return (
        <div>
            <BannerSec
                img={salad}
                posterHeading={"salad"}
                text={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            />
            <div className="py-10 w-[1320px] mx-auto">
                <div className="grid md:grid-cols-2 gap-3">
                    {
                        salads.map(item => <PopularItems
                            key={item._id}
                            item={item}
                        ></PopularItems>)
                    }
                </div>
                <Link to="order/salad">
                    <button className="border-b-4 border-black text-2xl font-semibold
                     text-black hover:bg-slate-100 rounded-lg my-10 
                       uppercase px-5 py-3 "
                    >
                        ORDER YOUR FAVOURITE salad
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Salads;