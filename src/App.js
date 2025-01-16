import './App.css';
import { useState } from "react";

function Key({ label, clickHandler, className }) {
  return (
    <button onClick={clickHandler} className={className}>
      {label}
    </button>
  );
}

function Display({ display }) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}

function App() {
  const fullName = "JOHN CARLO DIZON"; // Change to your full name
  const section = "IT3A";
  const [disp, setDisp] = useState("C-PEITEL3 EXPECTATIONS");

  const items = [
    "Being On Time",
    "Making An Effort",
    "Being High Energy",
    "Having A Positive Attitude",
    "Being Passionate",
    "Using Good Body Language",
    "Being Coachable",
    "Doing A Little Extra",
    "Being Prepared",
    "Having A Strong Work Ethic"
  ];

  const handleKeyClick = (index) => {
    if (index >= 0 && index < items.length) {
      setDisp(items[index]);
    }
  };

  const resetClickHandler = () => {
    setDisp("10 Things That Require Zero Talent");
  };

  const surnameClickHandler = () => {
    setDisp(fullName);
  };

  // New click handlers for the three buttons
  const whatILearnedHandler = () => {
    setDisp("I have learned the importance of being on time and making an effort.");
  };

  const whatIWantToLearnHandler = () => {
    setDisp("I want to learn how to improve my communication skills and time management.");
  };

  const howWillILearnHandler = () => {
    setDisp("I will learn by practicing consistency, attending workshops, and reading more books on self-development.");
  };

  return (
    <div className="App">
      <h1>{`${fullName} - ${section}`}</h1>

      <div className="CalcContainer">
        <div className="DispContainer">
          <Display display={disp} />
        </div>
        <div className="ButtonsContainer">
          <Key label={1} clickHandler={() => handleKeyClick(0)} />
          <Key label={2} clickHandler={() => handleKeyClick(1)} />
          <Key label={3} clickHandler={() => handleKeyClick(2)} />
          <Key label={4} clickHandler={() => handleKeyClick(3)} />
          <Key label={5} clickHandler={() => handleKeyClick(4)} />
          <Key label={6} clickHandler={() => handleKeyClick(5)} />
          <Key label={7} clickHandler={() => handleKeyClick(6)} />
          <Key label={8} clickHandler={() => handleKeyClick(7)} />
          <Key label={9} clickHandler={() => handleKeyClick(8)} />
          <Key label={0} clickHandler={() => handleKeyClick(9)} />
          <Key label={"R"} clickHandler={resetClickHandler} />
          <Key label={"N"} clickHandler={surnameClickHandler} />
        </div>
        <div className="intro">
            <Key label={"What I Learned?"} clickHandler={whatILearnedHandler} />
            <Key label={"What I Want to Learn?"} clickHandler={whatIWantToLearnHandler} />
            <Key label={"How Will I Learn?"} clickHandler={howWillILearnHandler} />
        </div>    
      </div>
    </div>
  );
}

export default App;