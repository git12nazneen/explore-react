

import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Users from './Users'

function App() {
 
  function handleClick (){
    alert('button clicked')
  }
  const handleClick2 = () =>{
    alert('button 2')
  }

  return (
    <>
     
      <h1>React Core concepts 2</h1>
    <Friends></Friends>
      <Users></Users>
     <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click 2</button>
    </>
  )
}

export default App
