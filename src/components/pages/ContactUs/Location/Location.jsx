import { FaMapMarkerAlt, FaPhoneVolume, FaRegClock } from "react-icons/fa";

const Location = () => {
    return (
        <div className="flex items-center">
            <div className="border h-[300px] w-[424px] mx-3 pb-4 ">
                <div className="bg-orange-400 h-[80px] w-[424px]">
                    <FaPhoneVolume className="w-14 h-14  mx-auto pt-5" />
                </div>
                <div className="w-[364px] h-[200px] mx-auto bg-[#F3F3F3] text-center">
                    <h3 className="text-3xl font-bold text-slate-900 pt-5">Phone</h3>
                    <p className="text-lg font-semibold text-slate-800">+8801736737636</p>
                </div>
            </div>
            <div className="border h-[300px] w-[424px] mx-3 pb-4 ">
                <div className="bg-orange-400 h-[80px] w-[424px]">
                    <FaMapMarkerAlt className="w-14 h-14  mx-auto pt-5" />
                </div>
                <div className="w-[364px] h-[200px] mx-auto bg-[#F3F3F3] text-center">
                    <h3 className="text-3xl font-bold text-slate-900 pt-5">Address</h3>
                    <p className="text-lg font-semibold text-slate-800">A/B Gulshan</p>
                </div>
            </div>
            <div className="border h-[300px] w-[424px] mx-3 pb-4 ">
                <div className="bg-orange-400 h-[80px] w-[424px]">
                    <FaRegClock className="w-14 h-14  mx-auto pt-5" />
                </div>
                <div className="w-[364px] h-[200px] mx-auto bg-[#F3F3F3] text-center">
                    <h3 className="text-3xl font-bold text-slate-900 pt-5">Work Hour</h3>
                    <p className="text-lg font-semibold text-slate-800">Mon - Fri: 08:00 - 22:00</p>
                    <p className="text-lg font-semibold text-slate-800">Mon - Fri: 08:00 - 22:00</p>
                </div>
            </div>
        </div>
    );
};

export default Location;