import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header } from "../components";

const DefaultLayout = () => {
  const { pathname } = useLocation();
  const isHomePath = pathname === "/";

  return (
    <>
      <Header transparent={isHomePath} />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
