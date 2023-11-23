
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Service from './service';
import config from './config';

function MyForm() {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const loginHandle = () => {
        console.log('email:', email, 'password:', password);
        let data = {
            email: email,
            password: password
        }
        UserService.login(dispatch, config.login, data, navigate);
    }

    return (
         <div className="container">
         <p style={{ textAlign: "center" }}>id: "eve.holt@reqres.in" : password: "cityslicka"</p>
         <form className="form" onSubmit={loginHandle}>
             <h2>Login Form</h2>
             <hr />

             <div>
                 <input
                     className="input"
                     type="text"
                     name="email"
                     value={email}
                     onChange={(e) => setemail(e.target.value)}
                     placeholder='Email'
                 />
             </div>

             <div>
                 <input
                     className="input"
                     type="text"
                     name="password"
                     value={password} 
                     onChange={(e) => setpassword(e.target.value)}
                     placeholder='Password'
                 />
             </div>

             <button className='btn' type="submit">Login</button>
         </form>
         
     </div>
    )
}

export default MyForm

// import React, { useState } from "react";
// import './form.css';
// import validation from "./validation";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const MyForm = () => {

//     const [formInputs, setFormInputs] = useState({});

//     const [errors, setError] = useState({});

//     const navigate = useNavigate()

//     const handleChange = (event) => {
//         // console.log(event);
//         const name = event.target.name;
//         const value = event.target.value;
//         setFormInputs(values => ({ ...values, [name]: value }))
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setError(validation(formInputs));
//         console.log('formInputs', formInputs)

//         if (errors && Object.keys(errors).length === 0 && Object.getPrototypeOf(errors) === Object.prototype) {
//             axios.post('https://reqres.in/api/login', {
//                 email: formInputs.email,
//                 password: formInputs.password
//             })
//                 .then(result => {
//                     if (result.status === 200) {
//                         console.log(result);
//                         localStorage.setItem('token', result.data.token);
//                         console.log("Login Success");
//                         setTimeout(() => {
//                             toast.success("Login Success!", {
//                                 position: "top-center"
//                             });
//                             navigate('/users');
//                         }, 1000);
//                     }
//                 })
//                 .catch(error => {
//                     toast.error(error.message, {
//                         position: "top-center"
//                     });
//                 })

//         }
//     }

//     return (
//         <div className="container">
//             <p style={{ textAlign: "center" }}>id: "eve.holt@reqres.in" : password: "cityslicka"</p>
//             <form className="form" onSubmit={handleSubmit}>
//                 <h2>Login Form</h2>
//                 <hr />

//                 <div>
//                     <input
//                         className="input"
//                         type="text"
//                         name="email"
//                         value={formInputs.email || ''}
//                         onChange={handleChange}
//                         placeholder='Email'
//                     />
//                     {errors.email && <p style={{ color: "red", fontSize: "13px" }}>{errors.email}</p>}
//                 </div>

//                 <div>
//                     <input
//                         className="input"
//                         type="text"
//                         name="password"
//                         value={formInputs.password || ''} onChange={handleChange}
//                         placeholder='Password'
//                     />
//                     {errors.password && <p style={{ color: "red", fontSize: "13px" }}>{errors.password}</p>}
//                 </div>

//                 <button className='btn' type="submit">Login</button>
//             </form>
//             <ToastContainer />
//         </div>

//     );
// };

// export default MyForm;