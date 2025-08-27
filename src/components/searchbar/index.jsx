import { useEffect, useState } from "react";
import { useProducts } from "../../contex/cart-context";
import axios from "axios";
export default function SearchBar() {
  const { data, setProducts, search, setSearch, setCategoriesId, categoryId } =
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
    setCategoriesId({ ...categoryId, id });
  };
  useEffect(() => {
    document.title = "Shopping";
    axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((reponse) => setCategories(reponse.data));
  }, []);
  return (
    <>
      <div className="flex justify-center w-full mt-4 flex-wrap">
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
      </div>
      <div className="flex flex-row justify-center flex-wrap">
        {Categories &&
          Categories.map((category) => (
            <h1
              className="rounded-md m-2 cursor-pointer  bg-indigo-200 border-2 border-gray-300"
              onClick={() => CategoryClick(category.id)}
              key={category.id}
            >
              {category.name}
            </h1>
          ))}
      </div>
    </>
  );
}
