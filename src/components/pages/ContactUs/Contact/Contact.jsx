import Cover from "../../../ReuseCompo/Cover/Cover";
import contact from '../../../../assets/contact/banner.jpg';
import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../ReuseCompo/SectionHeading/SectionHeading";
import Location from "../Location/Location";
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>Contact Us || Red Gold Restaurants</title>
            </Helmet>
            <div>
                <Cover
                    coverImg={contact}
                    coverHeader={"Contact Us"}
                    text={"Would you want to contact with us ,please fill up form and send us"}
                />
            </div>
            <div className="w-[1320px] mx-auto py-20">
                <SectionHeading
                    subHeading={"visit us"}
                    heading={"Location"}
                />
                <Location />
            </div>
            <div className="w-[1320px] mx-auto pt-20 pb-60">
                <SectionHeading
                    subHeading={"Send Us a Message"}
                    heading={"Contact Form"}
                />
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;