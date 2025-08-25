import { useProducts } from "../contex/cart-context";
import TiltedCard from "../components/card/card";
const Cart = () => {
  const { Cart } = useProducts();
  return (
    <div className="flex flex-wrap justify-center gap-6 p-8">
      {Cart.map((product) => (
        <TiltedCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Cart;
