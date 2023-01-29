import React, { useState } from "react";

const App = () => {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = ([weight /height / height] * 10000).toFixed(1);

    setBmi(val);
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  };
  return (
    <div>
      <center>
      <h1>Count Your Bmi ...</h1>
      <table border={1}>
        <tr>
          <td>Height : </td>
          <td>


      <input type="number" onChange={(e) => setHeight(e.target.value)}/>
          </td>
        </tr>
        <tr>
          <td> Weight :</td>
          <td>
      <input type="number" onChange={(e) => setWeight(e.target.value)}/>
          </td>
        </tr>
        <tr>
          <td align="center" colSpan={2}>
      <button onClick={handleBmi}>Calculate</button>
          </td>
        </tr>
      </table>
      <h1>{bmi}</h1>
      <h2>{info}</h2>
      </center>
    </div>
  );
};

export default App;