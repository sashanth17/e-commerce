import TiltedCard from "../components/card/card";
import SearchBar from "../components/searchbar";
import { useProducts } from "../contex/cart-context";
const Landing = () => {
  const { products } = useProducts();
  return (
    <div className="self-start">
      <SearchBar />
      <div className="flex flex-wrap justify-center gap-6 p-8">
        {products &&
          products.map((product) => (
            <TiltedCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Landing;
