import React from 'react'

const Login = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-[#242424] bg-[url('/mc-bgimg.svg')] bg-cover bg-center bg-no-repeat">
    <div className="w-[80%] h-[90vh] flex items-center justify-center bg-black bg-opacity-20 rounded-[20px] backdrop-filter backdrop-blur-[110px]">
      <div className="w-1/2 flex flex-col items-end justify-end">
        <h1 className="w-1/2 text-[#E3E3E3] text-[52px] font-[600]">Wallet  Project Dashboard</h1>
      </div>
      <hr className="bg-[#E3E3E3] rounded-[3px] w-1/2 h-1px rotate-90" />
      <form className="w-1/2 flex flex-col items-start">
        <h1 className='text-[#E3E3E3] text-[32px] font-[600] leading-normal mb-[50px]'>Let’s sign you in!</h1>
  <div className="mb-4 flex flex-col">
    <label htmlFor="login" className="text-[16px] text-[#E3E3E3] font-normal mb-2">Login</label>
    <input type="text" id="login" className="bg-[#9C191D] rounded-lg px-8 py-3 border-none focus:outline-none text-[#E3E3E3]" />
  </div>
  <div className="mb-4 flex flex-col">
    <label htmlFor="password" className="text-[16px] text-[#E3E3E3] font-normal mb-2">Password</label>
    <input type="password" id="password" className="bg-[#9C191D] rounded-lg px-8 py-3 border-none focus:outline-none text-[#E3E3E3]" />
  </div>
  <button type="submit" className=" text-[#E3E3E3] flex items-center justify-around text-[20px] gap-[10px]  border border-gray-300 rounded-[22px] px-4 py-2 mt-8">Sign In <img src="/rightarrow.svg"></img> </button>
  <p className='text-[#E3E3E3] font-normal mt-10'>Powered by InLoya</p>
</form>
    </div>
  </div>
  
  )
}

export default Login