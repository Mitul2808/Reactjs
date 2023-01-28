import React from 'react'

function Expense() {
  return (
    <>
         <div class="p-5 mx-8 flex justify-center">

         <div class= "w-96 rounded-2xl space-y-2 border-2 bg-white grid">
             <div class="text-2xl font-bold border-b-2 border-slate-400 w-96 p-4 text-center">
                 <span class="">Manage Team</span>
             </div>
             <div>
                 <span class="p-2">Recent</span>
             </div>
           
             <div class="flex justify-around w-96 -py-1">
                 
                     <div class="rounded-2xl h-12 w-12 chart__team border-2">
                         <img src={require('./images/plus.png')} alt="image" />
                     </div>

                     <div class="rounded-full h-12 w-12  chart__team">
                         <img src={require('./images/Avatar (1).png')} alt="" />
                     </div>

                     <div class="rounded-full h-12 w-12  chart__team">
                         <img src={require('./images/Avatar (1).png')} alt="" />
                     </div>

                     <div class="rounded-full h-12 w-12  chart__team">
                         <img src={require('./images/Avatar (2).png')} alt="" />
                     </div>

                     <div class="rounded-full h-12 w-12  chart__team">
                         <img src={require('./images/Avatar (3).png')} alt="" />
                     </div>

                     <div class="rounded-full h-12 w-12  chart__team">
                         <img src={require('./images/Avatar (4).png')} alt="" />
                     </div>
             </div> 
                
                <div class="flex justify-center space-x-4">
                     <span>Add</span>
                     <span>Dragos</span>
                     <span>Adrina</span>
                     <span>Robert</span>
                     <span>Joy</span>
                     <span>Monica</span>
                </div>
         </div>

       
         <div class="bg-white p-2 border-2 rounded-2xl -mt-36 -ml-8 grid items-center h-60">
             
             <div class="flex justify-between">
                 <span class="font-bold text-2xl">$63910.25</span>
                 <span>
                     <img src={require('./images/more-horizontal.png')} alt="image" />
                 </span>
             </div>

             <div>
                 <span>Total Expences Q2</span>
             </div>

            
             <div class="flex space-x-8 items-end justify-around">

                 <div class="grid  items-center space-y-2">
                     <div class="h-16 w-10 chart__color rounded-lg animation__2"></div>
                     <span>May</span>
                 </div>

                 <div class="grid  text-center space-y-2">
                     <div class="h-24 w-10 chart__color rounded-lg"></div>
                     <span>June</span>
                 </div>

                 <div class="grid  text-center space-y-2">
                     <div class="h-16 w-10 chart__color__secondary rounded-lg animation__2"></div>
                     <span>July</span>
                 </div>

                 <div class="grid  text-center space-y-2 ">
                     <div class="h-24 w-10 chart__color__secondary rounded-lg animation__1"></div>
                     <span>August</span>
                 </div>
             </div>
         </div>
                     
     </div>
     </>
  )
}

export default Expense