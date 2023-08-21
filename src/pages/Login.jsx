import React,{ useEffect, useState } from "react";
import { LoginApi } from "../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useSWRMutation from "swr/mutation";
const Login = () => {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (e) => {
    const val = e.target.value;
    setUsername(val);
  };

  const handlePassword = (e) => {
    const val = e.target.value;
    setPassword(val);
  };
  const fetcher = async (path, arg) => {
    const { data } = await LoginApi.user(path, arg);
    return data;
  };
  const { mutate, data, error, isLoading, isMutating } = useSWRMutation(
    "/api/AccountAdmin/LoginAdmin",fetcher
  );
  // const handleSubmit = async (e) => {

  //    e.preventDefault();
  //    mutate({ username, password });
  //  };
 
  // useEffect(() => {
   
  //    if (data?.statusCode === 200) {
  //     nav("/wallet");
    
  // toast.success(data?.message?.[0]);
  //   }  else if (data?.statusCode === 400) {
  //     toast.error (data?.message?.[0]);
  //   }
  //   else if (data?.statusCode === 404) {
  //  toast.error(data?.message?.[0]);
    
  //   }
  // }, [data]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch('https://reportapi.inloya.com/api/Account/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json()
      if (result.statusCode==200) {
        toast.success (result?.message);
       nav("/wallet");
       
      } else {
        console.log(result);
        toast.error (result?.message);
      }
    } catch (error) {
      // Handle network error
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-[#242424] bg-[url('/mc-bgimg.svg')] bg-cover bg-center bg-no-repeat">
      <div className="w-[80%] h-[90vh] flex items-center justify-center bg-black bg-opacity-20 rounded-[20px] backdrop-filter backdrop-blur-[110px]">
        <div className="w-1/2 flex flex-col items-end justify-end">
          <h1 className="w-1/2 text-[#E3E3E3] text-[52px] font-[600]">
            Wallet Project Dashboard
          </h1>
        </div>
        <hr className="bg-[#E3E3E3] rounded-[3px] w-1/2 h-1px rotate-90" />
        <form
          onSubmit={handleSubmit}
          className="w-1/2 flex flex-col items-start"
        >
          <h1 className="text-[#E3E3E3] text-[32px] font-[600] leading-normal mb-[50px]">
            Let’s sign you in!
          </h1>
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="userName"
              className="text-[16px] text-[#E3E3E3] font-normal mb-2"
            >
              Username
            </label>
            <input
             onChange={handleUsername}
              type="text"
              id="userName"
              className="bg-[#9C191D] rounded-lg px-8 py-3 border-none focus:outline-none text-[#E3E3E3]"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="password"
              className="text-[16px] text-[#E3E3E3] font-normal mb-2"
            >
              Password
            </label>
            <input
            onChange={handlePassword}
              type="password"
              id="password"
              className="bg-[#9C191D] rounded-lg px-8 py-3 border-none focus:outline-none text-[#E3E3E3]"
            />
          </div>
          <button
            type="submit"
            className=" text-[#E3E3E3] flex items-center justify-around text-[20px] gap-[10px]  border border-gray-300 rounded-[22px] px-4 py-2 mt-8"
          >
            Sign In <img src="/rightarrow.svg"></img>{" "}
          </button>
          <p className="text-[#E3E3E3] font-normal mt-10">Powered by InLoya</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
