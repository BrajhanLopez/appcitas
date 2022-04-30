
import './App.css';
import Cita from './components/Cita';
import { useState } from 'react';


function App() {
  const colors = ["red", "blue", "Gray", "DarkSlateGray", "IndianRed", "LightPink", "OrangeRed", "Gold", "Orchid", "LimeGreen", "LightBlue"]
  const [color, setcolor] = useState(Math.round(Math.random() * ((colors.length - 1) - 0) + 0))
  let end
  function changebackground() {
    //const colors = ["red", "blue", "black", "White"]


    end = Math.round(Math.random() * ((colors.length - 1) - 0) + 0)
    setcolor(end)

   
  }

  return (
    <div className="App" style={{ background: `${colors[color]}` }}>

      <Cita changecolor={changebackground} colors={colors} color={color} />
    </div>
  );
}

export default App;
