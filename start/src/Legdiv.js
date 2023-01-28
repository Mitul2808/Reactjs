import React from 'react'

function Legdiv() {
  return (
    <>
    <div class="bg-red-500 flex justify-center ">
        <div class="rounded-full chart__color  ml-72 -mt-20">
            <img src={require('./images/right_tick.png')} alt="image" class="p-8" />
        </div>
    </div>
        
        
    <div class="grid m-5  w-100 space-y-2 mx-28">
        <span class="text-2xl font-bold text-center">Better results with the Design System</span>
        
        <span class="text-center">
        Design systems are the secret to creating beautiful, functional design. 
        Design systems are made up of all the things you need to make a website or app
        look great and function well.  
        </span>
        
        <div class="flex justify-between space-x-4 mx-80 items-center">
            <span class="h-3 w-12 chart__color  rounded-2xl"></span>
            <span class="h-3 w-3 chart__scrool rounded-full bg-neutral-300"></span>
            <span class="h-3 w-3 chart__scrool rounded-full bg-neutral-300"></span>
            <span class="h-3 w-3 chart__scrool rounded-full bg-neutral-300"></span>
        </div>
        
    </div>
        
        </>
        )
    }
    
    export default Legdiv