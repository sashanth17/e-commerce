import { createContext, useContext, useReducer } from "react";
import LoginReducer from "../reducers/LoginReducer";
const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [loginState, loginDispatch] = useReducer(LoginReducer, {
    email: "",
    password: "",
    token: "",
    isLoggedIn: false,
  });
  return (
    <authContext.Provider value={{ loginState, loginDispatch }}>
      {children}
    </authContext.Provider>
  );
};
const useAuth = () => {
  return useContext(authContext);
};
export { useAuth, AuthProvider };
