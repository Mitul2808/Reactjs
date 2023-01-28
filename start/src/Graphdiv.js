import React from 'react'

function Graphdiv() {
  return (
      <>
     
     <div class="m-8">
        <img src={require('./images/Group 1.png')} alt="" />
     </div>

    
     <div class="flex mx-12 justify-center">
     
        <div class="border-2 bg-white w-80 rounded-2xl p-2">
     
            <div class="flex justify-between">
                <span class="text-slate-500">Active Revenue</span>
                <img src={require('./images/more-horizontal.png')} alt="" />
            </div>

             <div class="font-bold text-2xl mt-1">
                 <span>$28291</span>
             </div>

             <div class=" flex space-x-6 mt-16 items-end">
                
                <div class="h-16 w-8 chart__color animation__1 rounded-2xl"></div>
                <div class="h-20 w-8 chart__color animation__3 rounded-2xl"></div>
                <div class="h-28 w-8 chart__color  rounded-2xl"></div>
                <div class="h-16 w-8 chart__color animation__2 rounded-2xl"></div>
                <div class="h-28 w-8 chart__color animation__3 rounded-2xl"></div>
                <div class="h-16 w-8 chart__color animation__1 rounded-2xl"></div>
                <div class="h-24 w-8 chart__color animation__2 rounded-2xl"></div>
             
             </div>
             
             <div class="flex space-x-8 mt-2">
                 <span>15</span>
                 <span>16</span>
                 <span>17</span>
                 <span>18</span>
                 <span>19</span>
                 <span>20</span>
                 <span>21</span>
             </div>
                 
        </div>
                 
                 
             <div class="p-2 border-2 h-32 rounded-2xl bg-white m-5">
                 
                     <div class=" justify-around flex space-x-12">
                 
                         <span class="text-slate-500">Total Revenue</span>
                 
                    <div class="bg-green-100 flex space-x-2 text-green-600">
                        <img src={require('./images/trending-up.png')} alt="" />
                            <span>12.6%</span>
                    </div>
                 
             </div>
             
             <div class="grid pt-3">
                 <span class="text-2xl font-bold">$2313</span>
                 <span class="pt-2">23 orders</span>
             </div>
             
         </div>

     </div>
     </>
  )
}

export default Graphdiv