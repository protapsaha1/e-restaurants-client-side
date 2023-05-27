import { Link } from "react-router-dom";
import useMenu from "../../../CustomHook/useMenu/useMenu";
import SectionHeading from "../../../ReuseCompo/SectionHeading/SectionHeading";
import PopularItems from "../PopularItems/PopularItems";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <section>
            <div className="text-center">
                <SectionHeading
                    subHeading={"Check it out"}
                    heading={"FROM OUR MENU"}
                />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    popular.map(item => <PopularItems
                        key={item._id}
                        item={item}
                    ></PopularItems>)
                }
            </div>
            <Link to="/order/salad"><button
                className="border-b-4 border-black text-2xl font-semibold
            text-black hover:bg-slate-100 rounded-lg my-10 mx-[550px]
            uppercase w-[236px] h-[64px]"
            >View Full Menu
            </button></Link>
        </section>
    );
};
export default PopularMenu; 