import SectionHeading from "../../../ReuseCompo/SectionHeading/SectionHeading";
import PopularItems from "../../Home/PopularItems/PopularItems";
import useMenu from "../../../CustomHook/useMenu/useMenu";

const Offers = () => {
    const [menu] = useMenu(); 
    const offers = menu.filter(item => item.category === 'Offered');
    return (
        <div>
            <SectionHeading
                subHeading={"Don't miss"}
                heading={"TODAY'S OFFER"}
            />
            <div className="py-10">
                <div className="grid md:grid-cols-2 gap-3">
                    {
                        offers.map(item => <PopularItems
                            key={item._id}
                            item={item}
                        ></PopularItems>)
                    }
                </div>
            </div>
            <button className="border-b-4 border-black text-2xl font-semibold
              text-black hover:bg-slate-100 rounded-lg my-10 
              uppercase px-5 py-3 ">
                ORDER YOUR FAVOURITE FOOD
            </button>
        </div>
    );
};

export default Offers;