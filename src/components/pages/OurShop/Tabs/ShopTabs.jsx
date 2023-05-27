import RecommendItems from "../../Home/RecommendItems/RecommendItems";

const ShopTabs = ({ items }) => {
    return (
        <div className="grid md:grid-cols-3 gap-3 mt-20">
            {
                items.map(recommend => <RecommendItems
                    key={recommend._id}
                    recommend={recommend}
                ></RecommendItems>)
            }
        </div>
    );
};

export default ShopTabs;