import fea from '../../../../assets/home/featured.jpg';
import SectionHeading from '../../../ReuseCompo/SectionHeading/SectionHeading';
import './Featured.css';

const Featured = () => {
    return (
        <div className='bg-fixed featured h-[848px] w-full '>
            {/* <img className='bg-fixed' src={fea} alt="" /> */}
            {/* <div className='hero-overlay bg-opacity-60 absolute top-0'></div> */}
            <div className=''>
                <div className='text-center pt-20'>
                    <SectionHeading
                        subHeading={"Check Out"}
                        heading={"FROM OUR MENU"}
                    />
                </div>
                <div className='flex justify-center items-center bg-slate-500 bg-opacity-60'>
                    <img className='w-[648px] h-[400px] mr-8' src={fea} alt="" />
                    <div className='py-16'>
                        <h1 className='uppercase text-white text-xl'>March 20, 2023</h1>
                        <h1 className='uppercase text-white text-xl'> WHERE CAN I GET SOME?</h1>
                        <p className='uppercase text-white text-xl mt-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident velit,<br />
                            alias perspiciatis et libero incidunt deserunt aut necessitatibus ipsabr <br />
                            debitis numquam porro aperiam assumenda, nihil voluptas placeat temporibus tenetur iure?
                        </p>
                        <button className="border-b-4 border-white text-2xl font-semibold
                          text-white bg-transparent rounded-lg my-10  
                           uppercase w-[174px] h-[64px] hover:border-x-2 hover:border-t-2">
                            Read more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;