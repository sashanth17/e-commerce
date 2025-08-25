import { useEffect, useState } from "react";
import { useProducts } from "../../contex/cart-context";
import axios from "axios";
export default function SearchBar() {
  const { data, setProducts, search, setSearch, setCategoriesId } =
    useProducts();
  const searchChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      setProducts(data);
    } else {
      console.log(data[0].title);
      setProducts(
        data.filter((product) =>
          product.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };
  const [Categories, setCategories] = useState();
  const CategoryClick = (id) => {
    setCategoriesId(id);
  };
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((reponse) => setCategories(reponse.data));
  }, []);
  return (
    <div className="flex justify-center w-full mt-4">
      <div className="flex items-center w-1/2 border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
        <input
          type="search"
          placeholder="Search something..."
          className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none"
          onChange={searchChange}
          value={search}
        />
        <span className="material-symbols-outlined px-3 cursor-pointer text-gray-500 hover:text-blue-500">
          search
        </span>
        <span className="material-symbols-outlined px-3 cursor-pointer text-gray-500 hover:text-blue-500">
          filter_list
        </span>
      </div>
      {Categories &&
        Categories.map((category) => (
          <h1
            className="m-2 cursor-pointer"
            onClick={() => CategoryClick(category.id)}
          >
            |{category.name}|
          </h1>
        ))}
    </div>
  );
}
