import { useProducts } from "../../contex/cart-context";
const HorizontalCard = ({ product }) => {
  const { CartDispatch } = useProducts();
  const removeFromCart = () => {
    CartDispatch({ type: "REMOVE-FROM-CART", id: product.id });
  };
  return (
    <div className="flex items-center justify-between bg-white border rounded-xl shadow-sm p-4 hover:shadow-md transition w-full">
      {/* Left: Product Image */}
      <div className="flex items-center gap-4">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
            {product.title}
          </h3>
          <p className="text-sm text-gray-500">${product.price}</p>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={removeFromCart}
          className="text-sm px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default HorizontalCard;
