import { useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contex/auth-context";

const Login = () => {
  const navigate = useNavigate();

  const { loginState, loginDispatch } = useAuth();

  const onLoginClick = async (e) => {
    e.preventDefault(); // prevent page reload
    try {
      const res = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          email: loginState.email,
          password: loginState.password,
        }
      );
      loginDispatch({ type: "LOGIN-SUCCESS", token: res.data.access_token });

      // navigate AFTER state updates
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Please login with correct email id and password");
    }
  };

  const onEmailChange = (e) => {
    loginDispatch({ type: "EMAIL-CHANGE", email: e.target.value });
  };

  const onPasswordChange = (e) => {
    loginDispatch({ type: "PASSWORD-CHANGE", password: e.target.value });
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <form
        onSubmit={onLoginClick}
        className="bg-white p-6 rounded-2xl shadow-lg w-80 flex flex-col gap-4 border-2 border-indigo-500"
      >
        <h1 className="text-2xl font-bold text-center text-indigo-600">
          Login
        </h1>

        <input
          value={loginState.email}
          onChange={onEmailChange}
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          value={loginState.password}
          onChange={onPasswordChange}
          type="password"
          placeholder="Enter your password"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
