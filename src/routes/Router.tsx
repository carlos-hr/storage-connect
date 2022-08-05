import React from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import { Home } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
