import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl, setUser } =
    useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(
          `${backendUrl}/yogi/v1/user/register`,
          { name, email, password }
        );

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          setUser(response.data.name);
          localStorage.setItem("user", response.data.name);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(
          `${backendUrl}/yogi/v1/user/login`,
          { email, password }
        );

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          setUser(response.data.name);
          localStorage.setItem("user", response.data.name);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) navigate("/dashboard");
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-8"
      >
        {/* HEADER */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            {currentState}
          </h2>
          <span className="w-8 h-[2px] bg-gray-800" />
        </div>

        {/* INPUTS */}
        <div className="flex flex-col gap-4">
          {currentState === "Sign Up" && (
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          )}

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* SWITCH MODE */}
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="cursor-pointer hover:text-blue-600"
            >
              Create account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer hover:text-blue-600"
            >
              Login here
            </p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition font-medium"
        >
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
