import Card from "../../../ReuseCompo/Card/Card";

const RecommendItems = ({ recommend }) => {
    const { image, recipe, name, price } = recommend;
    return (
        <div className="border">
            <Card
                image={image}
                name={name}
                price={price}
                recipe={recipe}
            />

            <button
                className="border-b-4 border-yellow-500 text-2xl font-semibold
              text-yellow-700 bg-slate-100 rounded-lg my-10 
              uppercase w-[196px] h-[64px] hover:bg-red-950 mx-28"
            >add to cart
            </button>
        </div>
    );
};

export default RecommendItems;