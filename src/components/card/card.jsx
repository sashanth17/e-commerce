import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contex/cart-context";

export default function TiltedCard({ product }) {
  const { images, title, price } = product;
  const { Cart, CartDispatch, isInCart } = useProducts();
  const navigate = useNavigate();
  const addToCart = () => {
    CartDispatch({ type: "ADD-TO-CART", payload: product });
  };
  const removeFromCart = () => {
    CartDispatch({ type: "REMOVE-FROM-CART", id: product.id });
  };
  const CartButtons = () => {
    return isInCart(product.id) ? (
      <span
        className="material-symbols-outlined cursor-pointer"
        onClick={removeFromCart}
      >
        remove_shopping_cart
      </span>
    ) : (
      <span
        className="material-symbols-outlined cursor-pointer"
        onClick={addToCart}
      >
        add_shopping_cart
      </span>
    );
  };
  const detailViewClick = () => {
    navigate(`/detail-view/${product.id}`);
  };
  return (
    <div className="m-5 border-4 border-sky-500 w-56 h-72 flex flex-col m-1 p-4 rounded-lg shadow-cyan-500/50 bg-indigo-200">
      <div className="flex items-center justify-center flex-none h-32 w-full">
        <img className="h-28 object-contain" src={images[0]} alt={title} />
      </div>
      <div className="flex items-center justify-between w-full mt-4">
        <p
          onClick={detailViewClick}
          className="text-center text-base font-semibold cursor-pointer"
        >
          {title}
        </p>
      </div>
      <div className="m-5 flex flex-row justify-between">
        <h1>${price}</h1>
        <button>
          <span className="material-symbols-outlined cursor-pointer">
            favorite
          </span>
        </button>
        {
          <button className="m-1">
            <CartButtons />
          </button>
        }
      </div>
    </div>
  );
}
