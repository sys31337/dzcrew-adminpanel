import React from "react";
import Sidebar from "../sidebar";

const Layout = ({ children }) => {
  return (
    <Sidebar children={children} />
  );
};
export default Layout;
