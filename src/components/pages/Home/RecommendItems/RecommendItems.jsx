import { useContext } from "react";
import Card from "../../../ReuseCompo/Card/Card";
import { UserAuthentication } from "../../../ContextUser/UserProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../CustomHook/useMenu/useCart";

const RecommendItems = ({ recommend }) => {
    const { user } = useContext(UserAuthentication);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();
    const { image, recipe, name, price, _id } = recommend;
    const handleCart = item => {
        const cartItem = { menuId: _id, name, price, image, email: user.email }
        console.log(item)
        if (user && user.email) {
            fetch('http://localhost:5011/carts', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            // position: 'top-end',
                            icon: 'success',
                            title: 'successfully added to the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                    console.log(data)
                })
        }
        else {
            Swal.fire({
                title: 'Please login add to cart',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="border">
            <Card
                image={image}
                name={name}
                price={price}
                recipe={recipe}
            />

            <button onClick={() => handleCart(recommend)} className="
            border-b-4 border-yellow-500 text-2xl font-semibold
            text-yellow-700 bg-slate-100 rounded-lg my-10 mx-28
            uppercase w-[196px] h-[64px] hover:bg-red-950
              "
            >add to cart
            </button>
        </div>
    );
};

export default RecommendItems;