import React, { useState } from "react";
import axios from "axios";
import "../styles/SubscribeNewsletter.css";

const SubScribeNewsletter = () => {
  const [pointsData, setPointsData] = useState(null);
  const [excelPointsData, setExcelPointsData] = useState(null);
  const [side, setSide] = useState("");
  const [excelside, setExcelSide] = useState("");
  const [selection, setSelection] = useState("");
  const [excelselection, setEcelSelection] = useState("");
  const [choice, setChoice] = useState("");
  const [value, setValue] = useState("");

  const fieldRandomPoints = async () => {
    try {
      const response = await axios.post(
        `http://100022.pythonanywhere.com/v2/fieldrp/${process.env.REACT_APP_API_KEY}/`,
        {
          headers: { "Content-Type": "application/json" },
        },
        {
          side: side,
          selection: selection,
          choice: choice,
          value: value,
        }
      );

      setPointsData(response);
    } catch (error) {
      console.log(error);
    }
  };

  const excelRandomPoints = async () => {
    try {
      const response = await axios.post(
        `http://100022.pythonanywhere.com/v2/excelrp/${process.env.REACT_APP_API_KEY}/`,
        {
          headers: { "Content-Type": "application/json" },
        },
        {
          side: setExcelSide,
          selection: excelselection,
        }
      );

      setExcelPointsData(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='subscribe-container'>
        <h1>Field Random Points</h1>

        <form>
          <div className='form-inputs'>
            <input
              type='text'
              value={side}
              placeholder='Side'
              onChange={(e) => setSide(e.target.value)}
            ></input>
            <input
              type='text'
              value={selection}
              placeholder='Selection'
              onChange={(e) => setSelection(e.target.value)}
            ></input>
            <input
              type='text'
              value={choice}
              placeholder='Choice'
              onChange={(e) => setChoice(e.target.value)}
            ></input>
            <input
              type='text'
              value={value}
              placeholder='Value'
              onChange={(e) => setValue(e.target.value)}
            ></input>
          </div>

          <div className='form-button'>
            <button className='subscribe-button' onClick={fieldRandomPoints}>
              Get Cordinate
            </button>
          </div>

          <h1>Excel Random Points</h1>

          <div className='form-inputs'>
            <input
              type='text'
              value={excelside}
              placeholder='Side'
              onChange={(e) => setExcelSide(e.target.value)}
            ></input>
            <input
              type='text'
              value={excelselection}
              placeholder='Selection'
              onChange={(e) => setEcelSelection(e.target.value)}
            ></input>
          </div>

          <div className='form-button'>
            <button className='subscribe-button' onClick={excelRandomPoints}>
              Get Cordinate
            </button>
          </div>
        </form>
      </div>
      <div className='value-container'>
        <h2>Input Data:</h2>
        {pointsData && (
          <div>
            <p>Side: {pointsData.input_data.side}</p>
            <p>Selection: {pointsData.input_data.selection}</p>
          </div>
        )}

        {excelPointsData && (
          <div>
            <p>Side: {pointsData.input_data.side}</p>
            <p>Selection: {pointsData.input_data.selection}</p>
          </div>
        )}

        <h2>List of Points:</h2>
        {pointsData && (
          <ul>
            {pointsData.listOfPoints.map((point, index) => (
              <li key={index}>
                Point {index + 1}: ({point[0]}, {point[1]})
              </li>
            ))}
          </ul>
        )}
        {excelPointsData && (
          <ul>
            {pointsData.listOfPoints.map((point, index) => (
              <li key={index}>
                Point {index + 1}: ({point[0]}, {point[1]})
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SubScribeNewsletter;
