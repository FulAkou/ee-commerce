import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";
import Layout from "../layouts/Layout";
import { orderListAction } from "../Redux/Actions/Order";

const OrderHistory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderListAction());
  }, [dispatch]);

  const { loading, error, orders } = useSelector(
    (state) => state.orderListReducer
  );

  return (
    <>
      <Layout>
        {loading ? (
          <Loading />
        ) : (
          <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-5xl">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    My Orders
                  </h2>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div>
                      <label
                        htmlFor="order-type"
                        className="sr-only block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Select order type
                      </label>
                      <select
                        id="order-type"
                        className="w-full min-w-[8rem] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      >
                        <option defaultValue="">All orders</option>
                        <option value="pre-order">Pre-order</option>
                        <option value="transit">In transit</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </div>

                    <span className="text-center text-gray-500 dark:text-gray-400 sm:inline">
                      from
                    </span>

                    <div>
                      <label
                        htmlFor="duration"
                        className="sr-only block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Select duration
                      </label>
                      <select
                        id="duration"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      >
                        <option defaultValue="this week">This week</option>
                        <option value="this month">This month</option>
                        <option value="last 3 months">Last 3 months</option>
                        <option value="last 6 months">Last 6 months</option>
                        <option value="this year">This year</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-8 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                          Order ID
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                          Price
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                      {orders?.length > 0 ? (
                        orders.map((order, index) => (
                          <tr
                            key={order._id}
                            className={`hover:bg-gray-50 dark:hover:bg-gray-800 ${
                              index % 2 === 0
                                ? "bg-white dark:bg-gray-900"
                                : "bg-gray-50 dark:bg-gray-800"
                            }`}
                          >
                            <td className="px-6 py-4 text-sm font-medium text-blue-600 dark:text-blue-400">
                              <a href="#" className="hover:underline">
                                #{order._id}
                              </a>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                              {order.createdAt.substring(0, 10)}
                            </td>
                            <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                              ${order.totalPrice}
                            </td>
                            <td className="px-6 py-4 text-sm">
                              <span
                                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                                  order.isPaid
                                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                                }`}
                              >
                                <svg
                                  className="mr-1 h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                {order.isPaid ? "Paid" : "Not Paid"}
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan="4"
                            className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400"
                          >
                            No orders found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* <div className="mt-8 flow-root">
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {orders?.length > 0 ? (
                  orders.map((order) => (
                    <div
                      key={order._id}
                      className="flex flex-col gap-4 py-6 md:flex-row md:flex-wrap md:items-center"
                    >
                      <div className="w-full md:w-1/2 lg:w-1/4">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Order ID:
                        </dt>
                        <dd className="mt-1 text-base font-semibold text-gray-900 dark:text-white">
                          <a href="#" className="hover:underline">
                            #{order._id}
                          </a>
                        </dd>
                      </div>

                      <div className="w-full md:w-1/2 lg:w-1/4">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Date:
                        </dt>
                        <dd className="mt-1 text-base font-semibold text-gray-900 dark:text-white">
                          {order.createdAt.substring(0, 10)}
                        </dd>
                      </div>

                      <div className="w-full md:w-1/2 lg:w-1/4">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Price:
                        </dt>
                        <dd className="mt-1 text-base font-semibold text-gray-900 dark:text-white">
                          ${order.totalPrice}
                        </dd>
                      </div>

                      <div className="w-full md:w-1/2 lg:w-1/4">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Status:
                        </dt>
                        <dd
                          className={`mt-1 inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium ${
                            order.isPaid
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                          }`}
                        >
                          <svg
                            className="mr-1 h-3 w-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {order.isPaid ? "Paid" : "Not Paid Yet"}
                        </dd>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-6 text-center text-gray-500 dark:text-gray-400">
                    No orders found.
                  </div>
                )}
              </div>
            </div> */}
              </div>
            </div>
          </section>
        )}
      </Layout>
    </>
  );
};

export default OrderHistory;
