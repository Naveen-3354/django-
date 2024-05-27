import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/screens/HomeScreen";
import ProductScreen from "./components/screens/ProductScreen";
import CartScreen from "./components/screens/CartScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import Profile from "./components/screens/Profile";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index:true,
          element: <HomeScreen />,
        },
        {
          path: "login",
          element: <LoginScreen />,
        },
        {
          path: "register",
          element: <RegisterScreen />,
        },
        {
          path: "product/:id",
          element: <ProductScreen />,
        },
        {
          path: "cart/:id?",
          element: <CartScreen />,
        },
        {
          path:"profile",
          element:<Profile/>
        }
      ],
    },
  ]);
  return <RouterProvider router={route} />;
}

export default App;
