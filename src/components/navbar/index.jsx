import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const goToCart = () => {
    navigate("/cart");
  };
  const goToHome = () => {
    navigate("/");
  };
  return (
    <header className="w-full flex items-center justify-between px-6 py-3 bg-indigo-200">
      <h1 className="text-2xl font-bold cursor-pointer" onClick={goToHome}>
        Shopping
      </h1>

      <nav className="flex items-center gap-6">
        <button
          className="material-symbols-outlined text-[28px] cursor-pointer"
          onClick={goToCart}
        >
          shopping_cart
        </button>
        <span className="material-symbols-outlined text-[28px] cursor-pointer">
          account_circle
        </span>
      </nav>
    </header>
  );
};
