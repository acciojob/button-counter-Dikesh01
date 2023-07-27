
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [a, setA] = useState(0)
  return (
    <div>
        {/* Do not remove the main div */
          <div>
            <p>Button clicked {a} times</p>
            <button onClick={()=>setA(a+1)}>Click me</button>
          </div>
        }

    </div>
  )
}

export default App
