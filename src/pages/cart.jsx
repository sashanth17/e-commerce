import { useProducts } from "../contex/cart-context";
import TiltedCard from "../components/card/card";
import HorizontalCard from "../components/HorizontalCard/HorizontalCard";
const Cart = () => {
  const { Cart } = useProducts();
  let sum = 0;
  Cart.forEach((product) => (sum += product.price));

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Section - Cart Items */}
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart</h1>
        {Cart.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {Cart.map((product) => (
              // <TiltedCard key={product.id} product={product} />
              <HorizontalCard
                key={product.id}
                product={product}
              ></HorizontalCard>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Your cart is empty 🛒</p>
        )}
      </div>

      {/* Right Section - Checkout Summary */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 h-fit">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h2>

        {/* Order Summary */}
        <div className="border-t pt-4 mb-6">
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Subtotal</span>
            <span>${sum}</span>
          </div>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Shipping</span>
            <span>$20</span>
          </div>
          <div className="flex justify-between font-bold text-lg text-gray-900">
            <span>Total</span>
            <span>${sum + 20}</span>
          </div>
        </div>

        {/* Address Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Shipping Address
          </h3>
          <textarea
            rows="3"
            placeholder="Enter your address"
            className="w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          ></textarea>
        </div>

        {/* Place Order Button */}
        <button
          type="button"
          className="w-full bg-indigo-600 text-white font-medium py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
