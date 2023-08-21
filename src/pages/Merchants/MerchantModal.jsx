import { Dialog, Transition } from "@headlessui/react";
import React,{Fragment} from 'react'


const MerchantModal = ({ isOpen, closeModal, process }) => {
  return (
    <div>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {process === "Add" ? (
                <Dialog.Panel className="w-full max-w-xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="flex items-center justify-end font-bold font-inter text-16 leading-30 text-[#3E3E3E]"
                  >
              <span   onClick={closeModal}
                      className="w-[24px] h-[24px] text-[20px] cursor-pointer ">X</span>
                    
                  </Dialog.Title>
                 <div className="w-full flex flex-col">
                 <input
                className="w-full pr-[297px] py-[18px] pl-[45px] rounded-[5px] bg-white"
                placeholder="Search"
              />
                 </div>
                </Dialog.Panel>
              ) : process === "Edit" ? (
                <Dialog.Panel className="w-full max-w-xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="flex items-center justify-end font-bold font-inter text-16 leading-30 text-[#3E3E3E]"
                  >
                  
                    <span   onClick={closeModal}
                      className="w-[24px] h-[24px] text-[20px] cursor-pointer ">X</span>
                  </Dialog.Title>
                  <div>ff</div>
                </Dialog.Panel>
              ) : null}
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </div>
  )
}

export default MerchantModal