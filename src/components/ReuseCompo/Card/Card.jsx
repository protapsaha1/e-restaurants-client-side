
const Card = ({ image, recipe, name, price }) => {
    return (
        <div className="w-[424px] h-[541px] relative">
            <img className="w-[424px] h-[300px]" src={image} alt="" />
            <p className="bg-slate-700 py-2 px-4 absolute right-4 top-4 text-white text-2xl font-bold hover:border-2 hover:border-sky-300">${price}</p>
            <div className="mt-7 p-3 ">
                <h1 className="text-center text-2xl font-semibold uppercase font-serif text-black">{name}</h1>
                <p className="text-left text-lg font-semibold uppercase font-serif text-black">{recipe}</p>
            </div>
        </div>
    );
};

export default Card;