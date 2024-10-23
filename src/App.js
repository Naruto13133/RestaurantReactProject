import logo from "./logo.svg";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./Theme/Darktheme";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import RestaurantDetail from "./component/Restaurent/RestaurantDetail";
import Cart from "./component/Cart/Cart";
import Profile from "./component/Profile/Profile";
import CustomerRouter from "./Routers/CustomerRouter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./store/userSlice";

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("token");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
   if(auth.jwt || jwt) {
   const data =  dispatch(getUser(auth.jwt || jwt));
   console.log("userData")
   console.log(data);}
  }, [auth.jwt]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* <Navbar/> */}
      {/* <Home></Home> */}
      {/* <RestaurantDetail/> */}
      {/* <Cart/> */}
      {/* <Profile/> */}
      <CustomerRouter />
    </ThemeProvider>
  );
}

export default App;
