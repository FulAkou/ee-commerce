import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../layouts/Layout";
import { userLoginAction } from "../../Redux/Actions/User";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { loading, error } = userLoginReducer;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLoginAction(email, password));
  };

  return (
    <>
      <Layout>
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg dark:bg-gray-900 dark:text-gray-100">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            {/* {loading ? (
              <h1 className="text-center text-2xl font-bold">Loading...</h1>
            ) : error ? (
              <h1 className="text-center text-2xl font-bold text-red-500">
                {error}
              </h1>
            ) : ( */}
            <>
              <form className="space-y-6" onSubmit={submitHandler}>
                <div className="space-y-2 text-sm">
                  <label
                    htmlFor="email"
                    className="block font-medium dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border rounded-md focus:ring focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                  />
                </div>
                <div className="space-y-2 text-sm">
                  <label
                    htmlFor="password"
                    className="block font-medium dark:text-gray-300"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border rounded-md focus:ring focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                  />
                  <div className="flex justify-end text-xs dark:text-gray-400">
                    <a href="#" className="hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full p-3 text-center font-semibold rounded-md bg-violet-600 text-white hover:bg-violet-700 focus:ring focus:ring-violet-400"
                >
                  Sign in
                </button>
              </form>
            </>
            {/* // )} */}
            <p className="text-xs text-center dark:text-gray-400">
              Don't have an account?
              <a href="#" className="text-violet-600 hover:underline">
                {" "}
                Sign up
              </a>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
