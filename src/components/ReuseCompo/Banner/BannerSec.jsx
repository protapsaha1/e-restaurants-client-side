
const BannerSec = ({ img, posterHeading, text }) => {
    return (
        <div className="relative">
            <img className="w-full h-[700px]" src={img} alt="" />
            <div className="absolute top-56  left-96 w-[1096px] h-[350px] bg-black bg-opacity-60 ">
                <div className="px-16 py-20 text-center">
                    <h1 className="text-4xl text-white uppercase font-serif font-extralight">{posterHeading}</h1>
                    <p className="text-xl font-serif text-white p-5">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default BannerSec;