import Infodiv from './Infodiv';
import Login from './Login';
import './App.css';
import Graphdiv from './Graphdiv';
import Expense from './Expense';
import Legdiv from './Legdiv';

function App() {
  return (
    //  starting main/primary div
     <div class="flex main__div p-3">
   
           <div class="w-2/5  justify-between space-y-24 ">
              <Infodiv />
              <Login />
           </div>

           <div class="chart__div w-3/5">
              <Graphdiv />
              <Expense />
              <Legdiv />
           </div>
     </div>
  );
}

export default App;
