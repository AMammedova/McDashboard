import React,{useState} from "react";
import MerchantModal from "./MerchantModal";

const Merchants = () => {
    const [process, setProcess] = useState("");
let [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
      };
    
    const closeModal = ()=> {
        setIsOpen(false);
      };
  return (
    <React.Fragment>
      <div className="w-[100%] flex items-center justify-between mx-auto px-4 py-3">
        <h1 className="text-[#3E3E3E] text-[26px] font-medium ">Merchants</h1>
      </div>
      <div className="w-full min-h-screen bg-[#F3F5F9] flex justify-center items-start">
        <div className="w-[60%] mx-auto my-0 flex flex-col mt-10">
          <div className="w-full flex justify-between items-center">
            <div className="relative w-[400px]">
              <input
                className="w-full pr-[297px] py-[18px] pl-[45px] rounded-[5px] bg-white"
                placeholder="Search"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img className="w-5 h-5" src="/searchicon.svg" alt="" />
              </div>
            </div>
            <div className="relative w-[400px] cursor-pointer" >
              <div className="w-[400px]  flex justify-center items-center py-[18px]   rounded-[5px] border-[1px] border-solid border-blue-500 text-[#2577C8] text-[16px] font-[500]" onClick={() => {
          openModal();
          setProcess("Add");
        }}>
                Add
              </div>
              <div className="absolute inset-y-0 left-[8rem] flex items-center pl-3 pointer-events-none">
                <img className="w-5 h-5" src="/plus.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="w-full relative rounded-[5px] p-5 my-10 bg-white">
            <span className="absolute top-[-1.5rem] left-1 flex items-center pl-3 pointer-events-none text-[#A4A4A4] text-[14px]">
              ID1
            </span>
            <div className="w-full flex justify-between items-center">
              <p className="text-[#3E3E3E] text-[16px]">Adidas</p>{" "}
              <div className="w-[60px] flex justify-between items-center">
                <img className="w-[24px] h-[24px] cursor-pointer" src="/pen.svg" alt="" />
                <img  className="w-[24px] h-[24px] cursor-pointer" src="/delete.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
  <MerchantModal isOpen={isOpen} closeModal={closeModal} process={process}/>
    </React.Fragment>
  );
};

export default Merchants;
