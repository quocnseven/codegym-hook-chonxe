import logo from './logo.svg';
import './App.css';
import { useState } from "react";

const App = () => {
  const [state, setState] = useState("")
  const [state2, setState2] = useState("")
  

  const handleCar = event => {
    setState(event.target.value)
    
  }

  const handleColor = event => {
    setState2(event.target.value)
  }



  return (
    <div style={{textAlign: "center", padding: 30, backgroundColor: "gold"}}>
      <form>
        <select onChange={handleCar} id="cars" name="cars">
          <option value="Volvo">Volvo</option>
          <option value="Saab">Saab</option>
          <option value="Fiat">Fiat</option>
          <option value="Audi">Audi</option>
        </select>

        
        <select onChange={handleColor} id="colors" name="colors">
          <option value="Yellow">Yellow</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Gold">Gold</option>
        </select>
        <p>Bạn đã chọn xe {state}, màu {state2}</p>
      </form>
      
    </div>
  )
}

export default App;
