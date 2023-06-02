import SectionHeading from "../../../../ReuseCompo/SectionHeading/SectionHeading";
import useCart from "../../../../CustomHook/useCart/useCart";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCarts = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5011/carts/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })


            }
        })
    }
    return (
        <div className="w-full">
            <Helmet>
                <title>My Cart || Red Gold Restaurants</title>
            </Helmet>
            <div className="mt-60">
                <SectionHeading
                    subHeading={"My Cart"}
                    heading={"Wanna add more"}
                />
            </div>
            <div className=" w-[1800px] h-[975px] mx-auto bg-[#ffffff] p-36" >
                <div className="pb-10 flex justify-between items-center">
                    <h3 className="text-4xl font-bold font-serif">Total Items: {cart.length}</h3>
                    <h3 className="text-4xl font-bold font-serif">Total Price: {total}</h3>
                    <button className="btn uppercase bg-orange-300 text-2xl font-serif text-slate-900">
                        pay
                    </button>
                </div>
                <div className="overflow-x-auto pt-10 w-[1400] pb-10">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="bg-orange-600 px-3">
                            <tr>
                                <th></th>
                                <th className="text-2xl font-serif font-bold">Item Image</th>
                                <th className="text-2xl font-serif font-bold">Item Name</th>
                                <th className="text-2xl font-serif font-bold">Item Price</th>
                                <th className="text-2xl font-serif font-bold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {

                                cart.map((item, index) => <tr
                                    key={item._id}
                                >
                                    <td>
                                        <p className="text-xl">{index + 1}</p>
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-20 h-20">
                                                    <img className=" w-20 h-20" src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-ghost badge-lg text-xl">{item.name}</span>
                                    </td>
                                    <td><p className="text-xl">{item.price}</p></td>
                                    <th>
                                        <button className="btn btn-square bg-red-700 w-20 h-20 hover:bg-red-600" onClick={() => handleDelete(item._id)}>
                                            <FaTrashAlt className="w-8 h-8 text-white" />
                                        </button>
                                    </th>

                                </tr>)


                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCarts;