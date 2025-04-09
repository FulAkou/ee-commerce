import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productListAction } from "../../Redux/Actions/Product";

const Products = () => {
  const dispatch = useDispatch();
  const productListReducer = useSelector((state) => state.productListReducer);
  const {
    loading,
    error,
    products = [],
    page,
    totalPages,
  } = productListReducer;

  useEffect(() => {
    dispatch(productListAction(page));
  }, [dispatch, page]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Nos Produits</h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <span className="text-lg font-semibold">Chargement...</span>
        </div>
      ) : error ? (
        <div className="text-center text-red-500 font-semibold">
          {error}{" "}
          <button
            onClick={() => dispatch(productListAction(page))}
            className="ml-2 text-blue-500 underline"
          >
            Réessayer
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product._id}
                  className="border rounded-lg overflow-hidden shadow-md"
                >
                  <Link to={`/products/${product._id}`}>
                    <img
                      className="h-48 w-full object-cover"
                      src={product.image}
                      alt={product.name || "Produit"}
                    />
                  </Link>
                  <div className="p-4">
                    <Link
                      to={`/products/${product._id}`}
                      className="block mb-2"
                    >
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                    </Link>
                    <p className="text-sm text-gray-700 mb-2">
                      {product.description}
                    </p>
                    <p className="text-lg font-semibold ">${product.price}</p>
                    {/* <button className="flex justify-center mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                      Ajouter au panier
                    </button> */}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-4">
                Aucun produit disponible pour le moment.
              </p>
            )}
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product._id}
                  className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-125 bg-white"
                >
                  <img
                    className="h-52 w-full object-cover"
                    src={product.image}
                    alt={product.name || "Produit"}
                  />
                  <div className="p-4">
                    <Link
                      to={`/products/${product._id}`}
                      className="block mb-2"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-500 transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-600 mb-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold text-gray-900">
                        ${product.price}
                      </p>
                      <div className="flex items-center">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span
                            key={i}
                            className={`text-yellow-400 ${
                              i < product.rating ? "fas fa-star" : "far fa-star"
                            }`}
                          ></span>
                        ))}
                        <span className="text-gray-600 text-sm ml-2">
                          ({product.numReviews})
                        </span>
                      </div>
                    </div>
                    <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-4">
                Aucun produit disponible pour le moment.
              </p>
            )}
          </div> */}

          {/* Pagination */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button
              disabled={page <= 1}
              onClick={() => dispatch(productListAction(page - 1))}
              className={`px-4 py-2 border rounded ${
                page <= 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-yellow-500 text-white hover:bg-yellow-600"
              }`}
            >
              Précédent
            </button>

            <span className="text-lg font-semibold">
              {page} / {totalPages}
            </span>

            <button
              disabled={page >= totalPages}
              onClick={() => dispatch(productListAction(page + 1))}
              className={`px-4 py-2 border rounded ${
                page >= totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-yellow-500 text-white hover:bg-yellow-600"
              }`}
            >
              Suivant
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
