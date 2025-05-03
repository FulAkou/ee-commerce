import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem/CartItem";
import Layout from "../layouts/Layout";
import { saveShippingAddressAction } from "../Redux/Actions/Cart";
import { orderAction } from "../Redux/Actions/Order";
import { BASE_URL } from "../Redux/Constants/BASE_URL";

const PlaceOrder = () => {
  const cart = useSelector((state) => state.cartReducer); // to get the cart items from the store
  const { cartItems, shippingAddress } = cart; // destructure to get the cart items

  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  const subtotal = addDecimal(
    cartItems.reduce((total, item) => total + item.price * item.qty, 0)
  ); // Calculate subtotal from cart items

  const taxPrice = addDecimal(
    Number(subtotal) > 0 ? Number(subtotal * 0.15).toFixed(2) : 0
  ); // Calculate tax price (15% of subtotal)

  const shippingPrice = addDecimal(
    Number(subtotal) > 0 ? Number(subtotal * 0.05).toFixed(2) : 0
  ); // Calculate shipping price (5% of subtotal)

  const total = (
    Number(subtotal) +
    Number(taxPrice) +
    Number(shippingPrice)
  ).toFixed(2); // Calculate total price

  const [address, setAdress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const [clientid, setClientId] = useState(null);

  useEffect(() => {
    getPaypalClientId();
  }, []); // Fetch PayPal client ID when the component mounts

  const getPaypalClientId = async () => {
    const response = await axios.get(`${BASE_URL}/api/config/paypal`);
    const fetchedClientId = await response.data;
    if (fetchedClientId) {
      setClientId(fetchedClientId); // Set the client ID in the state
    } else {
      console.error("Failed to fetch PayPal client ID");
    }
  };
  const dispatch = useDispatch();
  const sussessPaymentHandler = async () => {
    try {
      dispatch(
        orderAction({
          orderItems: cartItems, // Pass the cart items to the order action
          shippingAddress: cart.shippingAddress, // Pass the shipping address from the cart}))
          totalPrice: total,
          paymentMethod: "PayPal", // Specify the payment method as PayPal
          price: subtotal, // Total price of the order
          taxPrice: taxPrice, // Tax price of the order
          shippingPrice: shippingPrice, // Shipping price of the order
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const saveShippingAddress = () => {
    dispatch(saveShippingAddressAction({ address, city, postalCode, country }));
  };
  return (
    <>
      <Layout>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  Order Summary
                </h2>

                <ul className="leading-relaxed mb-4">
                  <CartItem cartItems={cartItems} />
                </ul>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="ml-auto text-gray-900">${subtotal}</span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Tax</span>
                  <span className="ml-auto text-gray-900">${taxPrice}</span>
                </div>
                <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                  <span className="text-gray-500">Shipping price</span>
                  <span className="ml-auto text-gray-900">
                    ${shippingPrice}
                  </span>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${total} {/* Display the total price here */}
                  </span>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                  Shipping Adrress
                </h2>

                <div className="relative mb-4">
                  <label
                    htmlFor="address"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={address} // Bind the input value to the state
                    onChange={(e) => setAdress(e.target.value)} // Update the state when the input changes
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <label
                    htmlFor="city"
                    className="leading-7 text-sm text-gray-600"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <label
                    htmlFor="postalcode"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Postcode
                  </label>
                  <input
                    type="text"
                    id="postalcode"
                    name="postalcode"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <label
                    htmlFor="country"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button
                  onClick={saveShippingAddress}
                  className="mb-10 bg-yellow-500 text-white rounded hover:bg-yellow-600 py-2 px-4 transition duration-200 "
                >
                  Save Shipping Address
                </button>

                {clientid && (
                  <PayPalScriptProvider options={{ clientId: "test" }}>
                    <PayPalButtons
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          purchase_units: [
                            {
                              amount: {
                                value: total, // Use the total amount for the order
                              },
                            },
                          ],
                        });
                      }}
                      onApprove={(data, actions) => {
                        const order = actions.order
                          .capture()
                          .then(function (details) {
                            sussessPaymentHandler(details); // Call the success payment handler with the order details
                          });
                      }}
                    />
                  </PayPalScriptProvider>
                )}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default PlaceOrder;
