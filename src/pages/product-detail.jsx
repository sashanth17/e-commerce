import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../contex/cart-context";
const URL = "https://api.escuelajs.co/api/v1/products/";

const CartButtons = ({ product }) => {
  const { Cart, CartDispatch, isInCart } = useProducts();
  const addToCart = () => {
    CartDispatch({ type: "ADD-TO-CART", payload: product });
  };
  const removeFromCart = () => {
    CartDispatch({ type: "REMOVE-FROM-CART", id: product.id });
  };
  return isInCart(product.id) ? (
    <button
      type="submit"
      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
      onClick={removeFromCart}
    >
      Remove from cart
    </button>
  ) : (
    <button
      type="submit"
      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
      onClick={addToCart}
    >
      Add to cart
    </button>
  );
};
const ProductDetail = () => {
  const param = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    axios
      .get(URL + param.pid)
      .then((response) => response.data)
      .then((response) => {
        setProduct(response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="bg-white">
        <div className="pt-6">
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
            <img
              src={`${product && product.images[0]}`}
              alt="Model wearing plain white basic tee."
              className="row-span-2 aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-3/4"
            />
            <img
              src={`${product && product.images[1]}`}
              alt="Two each of gray, white, and black shirts laying flat."
              className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
            />
            <img
              src={`${product && product.images[2]}`}
              alt="Model wearing plain white basic tee."
              className="row-span-2 aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-3/4"
            />
          </div>

          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product && product.title}
              </h1>
            </div>
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                ${product && product.price}
              </p>
              {product && <CartButtons product={product} />}
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product && product.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
