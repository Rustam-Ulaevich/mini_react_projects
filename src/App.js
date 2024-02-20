import { useState } from 'react';
import './index.scss';

function App() {

  let [count, setCount] = useState(0)

  let countMinus = () => {
    if( count > 0){
      setCount( count - 1 )
    }
  }
  let countPlus = () => setCount( count + 1 )

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={countMinus}>- Минус</button>
        <button className="plus" onClick={countPlus}>Плюс +</button>
      </div>
    </div>
  );
}

export default App;
