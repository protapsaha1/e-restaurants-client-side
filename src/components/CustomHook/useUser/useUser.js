// import { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";


// const useUser = (name, email, photoURL) => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const from = location.state?.from?.pathname || '/';

//     const usersData = { name: name, email: email, UserPhoto: photoURL }
//     useEffect(() => {
//         fetch('http://localhost:5011/users', {
//             method: "POST",
//             headers: {
//                 "content-type": "application/json"
//             },
//             body: JSON.stringify(usersData)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 if (data.insertedId) {
//                     Swal.fire({
//                         icon: 'success',
//                         title: 'Login with Google Successfully',
//                         timer: 1500
//                     })
//                     navigate(from, { replace: true })

//                 }
//             })
//     }, [navigate, usersData, from])
// };

// export default useUser;