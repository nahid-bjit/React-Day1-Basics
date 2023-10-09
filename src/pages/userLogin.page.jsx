// // UserLoginPage.jsx

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../store/slices/authSlice';
// import "../components/loginForm.css"

// function UserLoginPage() {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Dispatch the loginUser action with email and password
//     dispatch(loginUser({ email, password }));
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default UserLoginPage;



import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import '../components/loginForm.css';
import CustomPassword from "../components/customPassword.component";

const UserLoginPage = ({ handleLogin, error }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handlerOnSubmit = () => {
    const email = getValues("email");
    const password = getValues("password");
    handleLogin(email, password);
  };

  useEffect(() => {
    console.log("Errors: ", errors);
  }, [errors]);

  return (
    <div className="form-parent">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(handlerOnSubmit)}>
        <div>
          <h4>Email</h4>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <input placeholder="Enter email" {...field} />
            )}
          />
        </div>

        <div>
          <h4>Password</h4>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum length must be 6",
              },
              maxLength: {
                value: 20,
                message: "Max length must be 20",
              },
            }}
            render={({ field }) => (
              <CustomPassword fields={field} placeholder="Enter Password" />
            )}
          />
          {errors.password && <h5>{errors.password.message}</h5>}
        </div>

        {error && <p>{error}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserLoginPage;

