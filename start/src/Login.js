import React from 'react'

function Login() {
  return (
        // sign up form div -->
        <>
        <div class="grid justify-center">
        
            <div class="grid justify-center w-100 items-center">

                    <span class="font-bold text-2xl">Login To platform</span>
                    <span class="text-md mt-6">Email Address *</span>

                    <input type="text" placeholder="name@domain.com" class="main__email h-12 rounded-md border-2" />

                    <span class="text-md mt-6">Password *</span>
                    <input type="password" placeholder="Strong Password" class="main__pass h-12 rounded-md border-2" />

                    <a href="#" class="text-center py-4 text-slate-400">
                        <span class="italic">Forgot Password ?</span>
                    </a>

                    <div class="h-12 w-96 rounded-2xl flex justify-center items-center main__button text-white">
                        <a href="#">Login</a>
                    </div>

                    <span class="text-center py-4 text-slate-400">Or connect With social Account</span>

                    <div class="flex space-x-2 text-center">

                        <div class="rounded-2xl h-12 border-2 cursor-pointer w-1/2 flex justify-center items-center bg-white">
                             <img src={require('./images/Union.png')} class="px-2"/>Google
                        </div>

                        <div class="rounded-2xl h-12 border-2 cursor-pointer w-1/2 flex justify-center items-center bg-white">
                            <img src={require('./images/Union2.png')} class="px-2"/>Facebook
                        </div>
             
                    </div>
             
             </div>
             
        </div>
             
        <div class="flex justify-center">
             
            <span>Dont have an account</span>
             
            <a href="#">
                <span class="ml-1 main__signup"> Sign up</span>
            </a>
             
        </div>
             
             </>
             );
            }

export default Login;