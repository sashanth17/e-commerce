const LoginReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL-CHANGE":
      return { ...state, email: action.email };

    case "PASSWORD-CHANGE":
      return { ...state, password: action.password };

    case "LOGIN-SUCCESS":
      return { ...state, token: action.token, isLoggedIn: true };

    case "LOGOUT":
      alert("you have been logged out");
      return { ...state, token: "", isLoggedIn: false };
    default:
      return state;
  }
};

export default LoginReducer;
