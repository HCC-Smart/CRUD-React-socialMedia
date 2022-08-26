import { useState } from "react";

const Login =() => {
  
     
            return(
        
        <>
            
            <form action="" class="w-full">
              <div id="input" class="flex flex-col w-full my-5">
                <label for="username" class="text-gray-500 mb-2"
                  >Username</label
                >
                <input
                  type="text"
                  id="username"
                  placeholder="Please insert your username"
                  class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                />
              </div>
              <div id="input" class="flex flex-col w-full my-5">
                <label for="password" class="text-gray-500 mb-2"
                  >Password</label
                >
                <input
                  type="password"
                  id="password"
                  placeholder="Please insert your password"
                  class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                />
              </div>
              <div id="button" class="flex flex-col w-full my-5">
                <button
                  type="button"
                  class="w-full py-4 bg-green-600 rounded-lg text-green-100"
                >
                  <div class="flex flex-row items-center justify-center">
                    <div class="mr-2">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        ></path>
                      </svg>
                    </div>
                    <div class="font-bold">Sigin</div>
                  </div>
                </button>
                <div class="flex justify-evenly mt-5">
                  <a
                    href="#"
                    class="w-full text-center font-medium text-gray-500"
                    >Recover password!</a
                  >
                  <a
                    href="#"
                    class="w-full text-center font-medium text-gray-500"
                    >Singup!</a
                  >
                </div>
              </div>
              
            </form>
        
        
    
              </>
         
    
    );
  }
  
  export default Login;
  