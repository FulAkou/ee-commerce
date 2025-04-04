import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem/CartItem";
import Layout from "../layouts/Layout";

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
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode); // State for postcode
  const [country, setCountry] = useState(shippingAddress.country); // State for country

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

                <p className="leading-relaxed mb-4">
                  <CartItem cartItems={cartItems} />
                </p>
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
                    for="address"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email Adress
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={address} // Bind the input value to the state
                    onChange={(e) => setAdress(e.target.value)} // Update the state when the input changes
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <label for="city" className="leading-7 text-sm text-gray-600">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <label
                    for="postalcode"
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
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <label
                    for="country"
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
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <PayPalScriptProvider options={{ clientId: "test" }}>
                  <PayPalButtons
                  // createOrder={createOrder}
                  // onApprove={onApprove}
                  />
                </PayPalScriptProvider>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default PlaceOrder;
