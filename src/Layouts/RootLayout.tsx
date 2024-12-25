import { Outlet } from "react-router-dom";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
import Sidebar from "../Pages/Sidebar";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Sidebar/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
