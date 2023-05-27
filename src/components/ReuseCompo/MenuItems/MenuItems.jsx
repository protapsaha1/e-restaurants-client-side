
const MenuItems = ({ image, name, recipe, price }) => {
    return (
        <div className="flex items-center p-2">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[100px] border h-[100px] mr-2" src={image} alt="" />
            <div className="ms-3">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl uppercase font-semibold text-black">{name}</h1>
                    <h3 className="text-yellow-700 text-2xl font-semibold">${price}</h3>
                </div>
                <p className="text-lg uppercase font-semibold text-black">{recipe}</p>
            </div>
        </div>
    );
};

export default MenuItems;