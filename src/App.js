import React, { useState } from "react";
import { BsFillBackspaceFill } from "react-icons/bs";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };
  const backSpace = () => {
    setResult(result.slice(0, result.length - 1));
  };
  return (
    <div className="calci__container">
      <div className="calci__input">
        <input type="text" placeholder="enter value" value={result}></input>
      </div>
      <div className="calci__btns">
        <button className="calci__btn" onClick={clear}>
          ce
        </button>
        <button className="calci__btn" onClick={clear}>
          c
        </button>
        <button className="calci__btn" onClick={backSpace}>
          <BsFillBackspaceFill />
        </button>
        <button className="calci__btn" name="/" onClick={handleClick}>
          /
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button className="calci__btn" name="*" onClick={handleClick}>
          *
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button className="calci__btn" name="+" onClick={handleClick}>
          +
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button className="calci__btn" name="-" onClick={handleClick}>
          -
        </button>
        <button>.</button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button className="calci__btn_eql" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};
export default App;
