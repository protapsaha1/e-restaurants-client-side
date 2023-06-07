import { FaTelegramPlane } from "react-icons/fa";
import useAxiosSecure from '../../../../CustomHook/useAxiosSecure/useAxiosSecure';
import SectionHeading from "../../../../ReuseCompo/SectionHeading/SectionHeading";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
const image_Host_Token = import.meta.env.VITE_IMAGE_UPLOAD_API;

const AddItems = () => {
    const { axiosSecure } = useAxiosSecure();
    const img_Hosting_Url = `https://api.imgbb.com/1/upload?key=${image_Host_Token}`;
    const handleAddToMenu = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = parseFloat(form.price.value);
        const recipes = form.recipes.value
        const image = form.image.files[0];

        const menuItem = { name: name, recipe: recipes, category: category, price: price }

        const formData = new FormData();
        formData.append("image", image);
        fetch(img_Hosting_Url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {

                if (imgRes.success) {
                    const imgUrl = imgRes.data.display_url;
                    const { name, recipe, category, price } = menuItem;
                    const menu = { name, recipe, image: imgUrl, category, price };
                    // menuItem.image = imgUrl;
                    console.log(menu)
                    axiosSecure.post('/menu', menu)
                        .then(data => {
                            console.log(data.data)
                            if (data.data.insertedId) {
                                form.reset();
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Add item successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                    // fetch('http://localhost:5011/menu', {
                    //     method: "POST",
                    //     headers: {
                    //         "content-type": "application/json"
                    //     },
                    //     body: JSON.stringify(menu)
                    // })
                    //     .then(res => res.json())
                    //     .then(data => {
                    //         console.log(data)
                    //         if (data.insertedId) {
                    //             Swal.fire({
                    //                 icon: 'success',
                    //                 title: 'Add item successfully',
                    //                 showConfirmButton: false,
                    //                 timer: 1500
                    //             })
                    //         }
                    //     })
                }
            })






    }

    return (
        <div className="w-full mt-60 mb-44">
            <Helmet>
                <title>Add Menu || Red Gold Restaurants</title>
            </Helmet>
            <div className="mt-60 mb-28">
                <SectionHeading
                    subHeading="Add Menu"
                    heading="Add an Item"
                />
            </div>
            <div className="w-10/12 bg-[#F3F3F3] p-24 mx-auto mt-28" >
                <form onSubmit={handleAddToMenu}>
                    <div>
                        <label>
                            <span className='text-2xl font-bold text-slate-600 '>Name <span className="text-sky-500 text-2xl ">*</span></span>
                        </label>
                        <br />
                        <input className='w-full h-[72px] bg-white ps-5 text-2xl text-slate-950 my-5' type="text" placeholder='Menu Name' name="name" id="menu" required />
                    </div>
                    <div className="grid grid-cols-2 gap-6  pt-10">
                        <div className="w-full">
                            <label>
                                <span className='text-2xl font-bold text-slate-600 '>Category <span className="text-sky-500 text-2xl ">*</span></span>
                            </label>
                            <br />
                            <select className='w-full h-[72px] bg-white ps-5 text-2xl text-slate-950 my-5' type="text" placeholder='Category' name="category" id="category" required >
                                <option>Select</option>
                                <option>Salad</option>
                                <option>Dessert</option>
                                <option>Pizza</option>
                                <option>Soup</option>
                                <option>Drinks</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <label>
                                <span className='text-2xl font-bold text-slate-600 '>Price <span className="text-sky-500 text-2xl ">*</span></span>
                            </label>
                            <br />
                            <input className='w-full h-[72px] bg-white ps-5 text-2xl text-slate-950 my-5' type="text" placeholder='Price' name="price" id="price" required />
                        </div>
                    </div>
                    <div>
                        <label>
                            <span className='text-2xl font-bold text-slate-600'>Description <span className="text-sky-500 text-2xl ">*</span></span>
                        </label>
                        <br />
                        <textarea className='w-full h-[300px] bg-white p-5 text-2xl text-slate-950 my-5 ' type="text" placeholder='Describe your recipes here' name="recipes" id="recipes" required />
                    </div>
                    {/* TODO CSS WORK IN FILE */}
                    <div>
                        <label>
                            <span className='text-2xl font-bold text-slate-600'>Upload Image <span className="text-sky-500 text-2xl ">*</span></span>
                        </label>
                        <br />
                        <input type="file" name="image" className="file-input file-input-bordered file-input-md  w-full bg-slate-50 text-xl" required />
                    </div>
                    <button type="submit" className=
                        'text-2xl font-semibold w-[220px] h-[56px]  mt-10 text-white bg-gradient-to-r from-orange-300 from-5% via-orange-700 via-60% to-slate-600 to-90% flex items-center justify-center'
                    >Send message <FaTelegramPlane className='text-white w-8 h-8 ms-3' />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;