import { useState } from "react";
import "./App.css";
export default App;
function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function clickPluseCount() {
    setCount((count) => count + step);
  }
  function clickMinesCount() {
    setCount((count) => count - step);
  }
  function handlerChange(e) {
    setStep(Number(e.target.value));
  }
  function handlerInput(e) {
    setCount(+e.target.value);
  }
  function handlerReset() {
    setCount(0);
    setStep(1);
  }
  return (
    <div className="countainer">
      <div className="count">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={handlerChange}
        />
        <span>setp:{step}</span>
      </div>
      <div className="count">
        <button className="btn" onClick={clickMinesCount}>
          -
        </button>
        <input
          className="in"
          type="text"
          value={count}
          onChange={handlerInput}
        ></input>
        <button className="btn" onClick={clickPluseCount}>
          +
        </button>
      </div>
      <p>
        <span>
          {(count === 0 && "today is:") ||
            (count >= 1 && `${count} days from today is: `) ||
            (count < 1 && `${-count} days ago was:`)}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 || step !== 0 ? (
        <div>
          <button onClick={handlerReset}>reset</button>
        </div>
      ) : null}
    </div>
  );
}
// {
//    <div className="count">
//         <button className="btn" onClick={clickMinesStep}>
//           -
//         </button>
//         <h2>STEP : {step}</h2>
//         <button className="btn" onClick={clickPluseStep}>
//           +
//         </button>
//       </div>
// }
// function clickPluseStep() {
//   setStep((step) => step + 1);
// }
// function clickMinesStep() {
//   if (step > 1) setStep((step) => step - 1);
// }
