import { useDispatch } from "react-redux";
import {
  addToCartAction,
  removeFromCartAction,
} from "../../Redux/Actions/Cart";

const CartItem = ({ cartItems }) => {
  const dispatch = useDispatch();
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCartAction(id)); // Dispatch the action to remove the item from the cart
  };

  const addToCartHandler = (id, qty) => {
    dispatch(addToCartAction(id, qty)); // Dispatch the action to add the item to the cart
  };
  return (
    <>
      <div className="mt-8">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {cartItems.map((product) => (
              <li key={product.id} className="flex py-6">
                <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    alt={product.imageAlt}
                    src={product.image}
                    className="size-full object-cover"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href={product.href}>{product.name}</a>
                      </h3>
                      <p className="ml-4">${product.price}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500 relative">
                      Qty :{" "}
                      <select
                        value={product.qty}
                        onChange={
                          (e) =>
                            dispatch(
                              addToCartHandler(
                                product.product,
                                Number(e.target.value)
                              ) // Update the quantity in the cart when changed
                            ) // Dispatch the action to update the quantity in the cart
                        }
                        className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </p>

                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-yellow-600 hover:text-yellow-500"
                        onClick={() => removeFromCartHandler(product.product)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CartItem;
