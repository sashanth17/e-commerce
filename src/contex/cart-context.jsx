import { createContext, useContext, useReducer, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const ProductContext = createContext();

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD-TO-CART": {
      return [...state, action.payload];
    }
    case "REMOVE-FROM-CART": {
      return state.filter((product) => product.id != action.id);
    }
    default: {
      return state;
    }
  }
};

const ProductProvider = ({ children }) => {
  const [search, setSearch] = useState();
  const [Cart, CartDispatch] = useReducer(CartReducer, []);
  const [data, setData] = useState([]);
  const [products, setProducts] = useState();
  const [categoryId, setCategoriesId] = useState(0);
  const isInCart = (id) => {
    return Cart.some((item) => item.id === id);
  };
  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products?categoryId=${categoryId}`)
      .then((response) => {
        setData(response.data);
        setProducts(response.data);
      });
  }, [categoryId]);

  return (
    <ProductContext.Provider
      value={{
        Cart,
        CartDispatch,
        isInCart,
        products,
        data,
        setProducts,
        search,
        setSearch,
        setCategoriesId,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => {
  return useContext(ProductContext);
};
export { useProducts, ProductProvider };
