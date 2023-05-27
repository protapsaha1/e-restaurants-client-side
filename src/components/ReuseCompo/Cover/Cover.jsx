import { Parallax } from 'react-parallax';

const Cover = ({ coverImg, text, coverHeader }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={coverImg}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="relative">
                <img className="w-full h-[800px]" src={coverImg} alt="" />
                {/* <img className="w-full h-[440px]" src={img} alt="" />  img, */}
                <div className="absolute top-56  left-96 w-[1096px] h-[400px] bg-black bg-opacity-60 ">
                    <div className="px-16 py-20 text-center">
                        <h1 className="text-8xl text-white uppercase font-serif font-bold">{coverHeader}</h1>
                        {/* <h1 className="text-4xl text-white uppercase font-serif font-extralight">{posterHeading}</h1> */}
                        <p className="text-xl font-serif text-white p-5 uppercase">{text}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;