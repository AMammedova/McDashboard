
import { NavLink, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const NavItem = ({
  id,
  name,
  path,
  icon,
  activeItem,
  setActiveItem,
}) => {

  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <NavLink
        key={path}
        to={path}
        className={`flex  items-center relative justify-center w-12 px-2 py-3 group-hover:w-full rounded-[10px] ${
          activeItem === id ? "bg-[#EDEFF1]" : "bg-white"
        }`}
      >
        <li
          className="flex justify-center w-full"
          onClick={() => setActiveItem(id)}
        >
   <div className="flex items-center justify-center group-hover:w-full justify-between">
            <div>{icon}</div>
            <div
              className={`hidden  w-[80%] whitespace-nowrap text-[#393939] text-[16px] font-normal group-hover:flex items-center h-full   rounded-[10px]`}
            >
              {name}
            </div>
          </div>
        </li>
      </NavLink>
    </React.Fragment>
  );
};

const Navbar = () => {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState(null); // Only declare activeItem here
  const sidebarItems = [
    {
      name: t("wallet"),
      path: "/wallet",
      icon: <img src="/walleticon.svg" alt="" className="w-6 h-6" />,
      
    },
    // {
    //   name: t("geopush"),
    //   path: "",
    //   icon: <img src="/geopushicon.svg" alt="" className="w-6 h-6" />,
     
    // },
    // {
    //   name: "Merchants",
    //   path: "/merchants",
    //   icon: <img src="/earth.svg" alt="" className="w-6 h-6" />,
     
    // },
  ];

  return (
    <div
      className={`fixed group z-10 sidebar-overlay transition-all w-[92px] hover:w-2/12 duration-300 min-h-screen border-r bg-white border-line`}
    >
      <div className="px-5 py-[23.5px] border-b border-line flex items-center justify-center group-hover:w-full justify-between">
        <div className="flex items-center justify-center w-12 h-12 rounded-[10px] bg-dark">
          <img src="/homeicon.svg" alt="" />
        </div>
        <div
              className={`hidden  w-[80%] whitespace-nowrap text-[#393939] text-[16px] font-normal group-hover:flex items-center h-full   rounded-[10px]`}
            >
              Home
            </div>

      </div>

      <ul className="p-5 space-y-4 overflow-x-hidden overflow-y-auto h-[80vh]">
        {sidebarItems.map(({ name, path, icon}) => (
          <NavItem
            key={name}
            id={name}
            name={name}
            path={path}
            icon={icon}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
