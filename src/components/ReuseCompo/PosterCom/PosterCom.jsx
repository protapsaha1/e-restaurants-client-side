
const PosterCom = ({ img, posterHeading, text }) => {
    return (
        <div className="relative">
            <img className="w-full h-[440px]" src={img} alt="" />
            <div className="absolute top-16 left-28 w-[1096px] h-[300px] bg-white ">
                <div className="px-16 py-20 text-center">
                    <h1 className="text-4xl text-black uppercase font-serif font-extralight">{posterHeading}</h1>
                    <p className="text-xl font-serif text-black p-10">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default PosterCom;