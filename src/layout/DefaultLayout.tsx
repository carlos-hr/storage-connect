import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components";

const DefaultLayout = () => {
  const { pathname } = useLocation();
  const isHomePath = pathname === "/";

  return (
    <>
      <Header transparent={isHomePath} />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
