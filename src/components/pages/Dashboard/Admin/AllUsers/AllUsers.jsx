import { useQuery } from "@tanstack/react-query";
import SectionHeading from "../../../../ReuseCompo/SectionHeading/SectionHeading";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5011/users')
        return res.json()
    })

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
                fetch(`http://localhost:5011/users/${id}`, {
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
    };

    const handleIsAdmin = user => {
        console.log(user)
        fetch(`http://localhost:5011/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: `${user.name} is an Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    return (
        <div className="w-full mt-60">
            <Helmet>
                <title>All Users || Red Gold Restaurants</title>
            </Helmet>
            <div className="mt-60">
                <SectionHeading
                    subHeading="Web users"
                    heading="Manage all users"
                />
            </div>

            <div className=" w-[1800px] h-[1000px] mx-auto bg-[#ffffff] p-36 mb-20">
                <h1 className="text-6xl h-20 text-slate-900 font-bold font-serif">Total Users: {users.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-[1500px] mx-auto text-2xl">
                        <thead>
                            <tr>
                                <th></th>
                                <th className="text-2xl font-serif font-bold">Name</th>
                                <th className="text-2xl font-serif font-bold">Email</th>
                                <th className="text-2xl font-serif font-bold">Role</th>
                                <th className="text-2xl font-serif font-bold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr
                                    key={user._id}
                                >

                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role === 'admin' ? 'admin' :
                                            <button className="bg-orange-400 btn btn-square w-20 h-20 hover:bg-orange-500" onClick={() => handleIsAdmin(user)}>
                                                <FaUserShield className="w-8 h-8 text-white" />
                                            </button>

                                        }
                                    </td>
                                    <td>
                                        <button className="btn btn-square bg-red-700 w-20 h-20 hover:bg-red-600" onClick={() => handleDelete(user._id)}>
                                            <FaTrashAlt className="w-8 h-8 text-white" />
                                        </button>
                                    </td>
                                </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default AllUsers;