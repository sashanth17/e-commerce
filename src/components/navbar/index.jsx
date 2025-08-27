import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contex/auth-context";

export const Navbar = () => {
  const navigate = useNavigate();
  const { loginState, loginDispatch } = useAuth();
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const menuRef = useRef(null);

  const goToCart = () => {
    navigate("/cart");
  };
  const goToHome = () => {
    navigate("/");
  };
  const goToLoginClick = () => {
    navigate("auth/login");
    setShowAccountMenu(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowAccountMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full flex items-center justify-between px-6 py-3 bg-indigo-200 relative">
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

        {/* Account button */}
        <button onClick={() => setShowAccountMenu(!showAccountMenu)}>
          <span className="material-symbols-outlined text-[28px] cursor-pointer">
            account_circle
          </span>
        </button>

        {/* Login/Logout text for direct toggle (kept as is) */}
        <div
          onClick={
            !loginState.isLoggedIn
              ? goToLoginClick
              : () => {
                  loginDispatch({ type: "LOGOUT" });
                }
          }
          className="z-4 cursor-pointer"
        ></div>
      </nav>

      {/* Dropdown overlay */}
      {showAccountMenu && (
        <div
          ref={menuRef}
          className="absolute top-14 right-6 bg-white shadow-lg rounded-md p-3 z-50"
        >
          <div
            onClick={
              !loginState.isLoggedIn
                ? goToLoginClick
                : () => {
                    loginDispatch({ type: "LOGOUT" });
                    setShowAccountMenu(false);
                  }
            }
            className="cursor-pointer text-gray-700 hover:text-indigo-600"
          >
            {!loginState.isLoggedIn ? "Login" : "Logout"}
          </div>
        </div>
      )}
    </header>
  );
};
