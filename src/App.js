import "./App.css";
import Divice from "./Components/Divice/Divice";
import { useEffect, useState } from "react";

function App() {
  const [steps, setSteps] = useState(0);
  const handelIncriesWalk = () => {
    const newSteps = steps + 1;
    setSteps(newSteps);
  };
  useEffect(() => {
    console.log(steps);
  }, [steps]);
  return (
    <div className="App">
      <h3>{steps}</h3>
      <button onClick={handelIncriesWalk}>Walk</button>
      <Divice name="phone" price="13000" steps={steps} />
    </div>
  );
}

export default App;
