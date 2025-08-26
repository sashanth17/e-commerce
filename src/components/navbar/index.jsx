import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contex/auth-context";
export const Navbar = () => {
  const navigate = useNavigate();
  const { loginState, loginDispatch } = useAuth();
  const goToCart = () => {
    navigate("/cart");
  };
  const goToHome = () => {
    navigate("/");
  };
  const goToLoginClick = () => {
    navigate("auth/login");
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
        <button>
          <span className="material-symbols-outlined text-[28px] cursor-pointer">
            account_circle
          </span>
        </button>
        <div
          onClick={
            !loginState.isLoggedIn
              ? goToLoginClick
              : () => {
                  loginDispatch({ type: "LOGOUT" });
                }
          }
          className="z-"
        >
          {!loginState.isLoggedIn ? <>login</> : <>logout</>}
        </div>
      </nav>
    </header>
  );
};
