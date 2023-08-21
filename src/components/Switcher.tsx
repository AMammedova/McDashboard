

import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useTranslation } from "react-i18next";

const Switcher = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = async (language:any) => {
    await i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };

  const customStyles = {
    control: (provided: any, props: any) => ({
      ...provided,
      // backgroundImage: "url('/public/icons/dropdown.svg')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right center",
      backgroundSize: "16px 16px",
      // paddingRight: "16px",
      cursor: "pointer",
      border: "1px solid #333333",
      borderRadius: "10px",
      outline: props.isFocused ? "none" : "",
      appearance: "none",
    }),
    option: (provided:any, state:any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#e2e8f0" : "#f2f2f2",
      color: "#333333",
      fontSize: "14px",
      padding: "8px 12px",
      borderRadius: "4px",
    }),
  };

  const languageOptions = [
    { value: "az", label: "Az" },
    { value: "en", label: "En" },
    { value: "ru", label: "Ru" },
  ];

  return (
    <div className="w-1/3 flex items-center justify-center">
      <div className="flex items-center justify-between w-[200px]">
        <Select
          options={languageOptions}
          value={languageOptions.find((option) => option.value === currentLanguage)}
          onChange={(option:any) => changeLanguage(option.value)}
          styles={customStyles}
          className="focus:outline-none"
          
        />
      </div>
    </div>
  );
};

export default Switcher;
