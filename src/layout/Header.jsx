import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Switcher from "../components/Switcher";
const Header = () => {
  const [headerName, setHeaderName] = useState("");
  const { pathname } = useLocation();
  const { t,i18n } = useTranslation();

    


  const getPathName = (pathname) => {
    switch (pathname) {
      case "/":
        return setHeaderName(t("dashboard"));

      case "/references":
        return setHeaderName("References");

      default:
        return setHeaderName("");
    }
  };

  useEffect(() => {
    getPathName(pathname);
  }, [pathname,t]);
  return (
    <div className="flex items-center justify-between w-full h-24 px-12 border-b border-line">
      <img src="/wpicon.svg" alt="" />
      <div className="object-cover w-1/3 flex items-center justify-end">
      {/* <Switcher/> */}
        {/* <img src="/settingsicon.svg" className="w-8 h-8 m-2 cursor-pointer" alt="" />
        <img src="/exiticon.svg" className="w-8 h-8 m-2 cursor-pointer" alt="" /> */}
      </div>
    </div>
  );
};

export default Header;
