import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Header from "./Header";


const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="fixed right-0 z-10 left-[90px] bg-background">
        <Header />
      </div>
      <Navbar />
      <div className=" pointer-events-auto flex-1 relative mt-24  ml-[90px] pb-24">
        {children}
      </div>
    </Fragment>
  );
};

export default Layout;
