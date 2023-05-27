import MenuItems from "../../../ReuseCompo/MenuItems/MenuItems";

const PopularItems = ({ item }) => {
    const { image, name, recipe, price } = item;
    return (
        <div>
            <MenuItems
                image={image}
                name={name}
                recipe={recipe}
                price={price}
            />
        </div>
    );
};

export default PopularItems;