import Cover from "../../../ReuseCompo/Cover/Cover";
import coverImage from '../../../../assets/menu/banner3.jpg';
const Banner = () => {
    return (
        <div>
            <Cover
                coverImg={coverImage}
                coverHeader={"OUR MENU"}
                text={"would you lik to try a dish?"}
            />
        </div>
    );
};

export default Banner;