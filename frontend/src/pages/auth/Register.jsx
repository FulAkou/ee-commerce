import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../../layouts/Layout";
import { userRegisterAction } from "../../Redux/Actions/User";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userRegisterReducer = useSelector((state) => state.userRegisterReducer);
  const { loading, error, success } = userRegisterReducer;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Rediriger vers la page de connexion après une inscription réussie
  useEffect(() => {
    if (success) {
      navigate("/login", { replace: true }); // Utiliser replace pour éviter de revenir à la page d'inscription avec le bouton "Précédent"
    }
  }, [success, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userRegisterAction(name, email, password));
  };

  return (
    <Layout>
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg dark:bg-gray-900 dark:text-gray-100">
          <h1 className="text-2xl font-bold text-center">Register</h1>
          {loading ? (
            <h1 className="text-center text-2xl font-bold">Loading...</h1>
          ) : error ? (
            <h1 className="text-center text-2xl font-bold text-red-500">
              {error}
            </h1>
          ) : (
            <form className="space-y-6" onSubmit={submitHandler}>
              <div className="space-y-2 text-sm">
                <label
                  htmlFor="name"
                  className="block font-medium dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border rounded-md focus:ring focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                />
              </div>
              <div className="space-y-2 text-sm">
                <label
                  htmlFor="email"
                  className="block font-medium dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
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
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border rounded-md focus:ring focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                />
              </div>
              <button
                type="submit"
                className="w-full p-3 text-center font-semibold rounded-md bg-yellow-600 text-white hover:bg-yellow-700 focus:ring focus:ring-yellow-400"
              >
                Sign up
              </button>
            </form>
          )}
          <p className="text-xs text-center dark:text-gray-400">
            Already have an account?
            <a href="/login" className="text-yellow-600 hover:underline">
              {" "}
              Login
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
