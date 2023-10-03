import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [update, setUpdate] = useState(true);

  function hendlNext() {
    if (step < 3) setStep((s) => s + 1);
  }
  function hendlePrev() {
    if (step > 1) setStep((s) => s - 1);
  }
  return (
    <>
      <div>
        <button className="close" onClick={() => setUpdate((s) => !update)}>
          &times;
        </button>
      </div>
      <h1>hellow react js</h1>
      {update ? (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={hendlePrev}
            >
              previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={hendlNext}
            >
              next
            </button>
          </div>
        </div>
      ) : (
        <h1> desiapre</h1>
      )}
    </>
  );
}
