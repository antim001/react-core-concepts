
import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import User from './User';

function App() {
 const addFive=(num)=>{
     alert(num+5);
 }
  return (
    <>
    <Friends></Friends>
      <User></User>
      <h3> React Core Concepts</h3>
      <Counter></Counter>
      <button onClick={()=>addFive(3)}>Click Me</button>
     
      
    </>
  )
}

export default App
