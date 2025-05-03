import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../layouts/Layout";
import { userRegisterAction } from "../../Redux/Actions/User";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userRegisterReducer = useSelector((state) => state.userRegisterReducer);
  const { loading, error, userInfo } = userRegisterReducer;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userRegisterAction(name, email, password));
  };
  return (
    <>
      <Layout>
        <div className="flex items-center justify-center min-h-screen  p-4  ">
          <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
              Register
            </h1>
            {/* {loading ? (
              <h1>loading</h1>
            ) : error ? (
              <h1>{error}</h1>
            ) : ( */}
            <>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-3 text-center text-white bg-violet-600 rounded-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  Submit
                </button>
              </form>
            </>
            {/* )} */}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Register;
