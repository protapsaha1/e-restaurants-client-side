import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import cate1 from '../../../../assets/home/slide1.jpg'
import cate2 from '../../../../assets/home/slide2.jpg'
import cate3 from '../../../../assets/home/slide3.jpg'
import cate4 from '../../../../assets/home/slide4.jpg'
import cate5 from '../../../../assets/home/slide5.jpg'
import SectionHeading from "../../../ReuseCompo/SectionHeading/SectionHeading";

const Category = () => {
    return (
        <section>
            <div className="text-center pt-10">
          
             
                <SectionHeading
                    subHeading={"From 11:00am to 10:00pm"}
                    heading={"ORDER ONLINE"}
                />
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className="relative">
                    <img className="w-full" src={cate1} alt="" />
                    <h3 className="uppercase text-center text-white absolute bottom-12 left-28 text-4xl shadow-md font-semibold ">Salad</h3>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className="w-full" src={cate2} alt="" />
                    <h3 className="uppercase text-center text-white absolute bottom-12 left-28 text-4xl shadow-md font-semibold ">Soups</h3>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className="w-full" src={cate3} alt="" />
                    <h3 className="uppercase text-center text-white absolute bottom-12 left-28 text-4xl shadow-md font-semibold ">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className="w-full" src={cate4} alt="" />
                    <h3 className="uppercase text-center text-white absolute bottom-12 left-28 text-4xl shadow-md font-semibold ">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className="w-full" src={cate5} alt="" />
                    <h3 className="uppercase text-center text-white absolute bottom-12 left-28 text-4xl shadow-md font-semibold ">salad</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;