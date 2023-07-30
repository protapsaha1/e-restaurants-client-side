import { useEffect, useState } from "react";
import SectionHeading from "../../../ReuseCompo/SectionHeading/SectionHeading";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { BsEarbuds } from "react-icons/bs";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch("http://localhost:5011/reviews")
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <div>
            <div className="pb-10">
                <SectionHeading
                    subHeading={"What Our Clients Say"}
                    heading={"TESTIMONIALS"}
                />
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    testimonials.map(testimonial => <SwiperSlide
                        key={testimonial._id}
                        testimonial={testimonial}
                    >
                        <div className="mx-24 flex flex-col items-center">
                            <div className="mb-10 ">
                                <Rating
                                    style={{ maxWidth: 280 }}
                                    value={testimonial?.rating}
                                    readOnly
                                />
                            </div>
                            <div className="my-10">
                                <BsEarbuds className="w-60 h-60 text-slate-700" />
                            </div>
                            <p className="text-xl font-semibold uppercase text-center text-black">{testimonial.details}</p>
                            <h3 className="text-3xl text-orange-400 font-semibold uppercase text-center">{testimonial.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div >
    );
};

export default Testimonials;