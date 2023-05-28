import captcha from '../../../../assets/icon/captcha.png';
import { FaTelegramPlane } from "react-icons/fa";


const ContactForm = () => {

    const handleContact = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        console.log(name, email, message)
    }

    return (
        <div className="h-[1070px] bg-[#F3F3F3] px-28" >
            <form onSubmit={handleContact}>
                <div className="grid grid-cols-2 gap-4  pt-10">
                    <div>
                        <label>
                            <span className='text-2xl font-bold text-slate-600 '>Name <span className="text-sky-500 text-2xl ">*</span></span>
                        </label>
                        <br />
                        <input className='w-[536px] h-[72px] bg-white ps-5 text-2xl text-slate-950 my-5' type="password" placeholder='Enter Your Password' name="password" id="password" required />
                    </div>
                    <div>
                        <label>
                            <span className='text-2xl font-bold text-slate-600 '>Email <span className="text-sky-500 text-2xl ">*</span></span>
                        </label>
                        <br />
                        <input className='w-[536px] h-[72px] bg-white ps-5 text-2xl text-slate-950 my-5' type="email" placeholder='Enter Your Email' name="email" id="email" required />
                    </div>
                </div>
                <div>
                    <label>
                        <span className='text-2xl font-bold text-slate-600 '>Phone <span className="text-sky-500 text-2xl ">*</span></span>
                    </label>
                    <br />
                    <input className='w-full h-[72px] bg-white ps-5 text-2xl text-slate-950 my-5' type="text" placeholder='Enter Your Phone' name="Phone" id="phone" required />
                </div>
                <div>
                    <label>
                        <span className='text-2xl font-bold text-slate-600 '>Message <span className="text-sky-500 text-2xl ">*</span></span>
                    </label>
                    <br />
                    <textarea className='w-full h-[300px] bg-white p-5 text-2xl text-slate-950 my-5 ' type="text" placeholder='Write your Message Here' name="message" id="message" required />
                </div>
                <div className="w-[394px] h-[78px] bg-white shadow-slate-100 flex items-center">
                    <input className="mx-4 w-6 h-6 bg-white" type="checkbox" name="captcha" id="captcha" />
                    <label>
                        <span className="text-lg text-slate-900">I,m not robot</span>
                    </label>
                    <img className='w-28 h-16 ms-28' src={captcha} alt="" />
                </div>
                <button className=
                    'text-2xl font-semibold w-[220px] h-[56px] mx-[450px] mt-36 text-white bg-gradient-to-r from-orange-300 from-5% via-orange-700 via-60% to-slate-600 to-90% flex items-center justify-center'
                >Send message <FaTelegramPlane className='text-white w-8 h-8 ms-3' />
                </button>
            </form>
        </div>
    );
};

export default ContactForm;