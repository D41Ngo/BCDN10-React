import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../../redux/change-color.slice";

function ChangeColor() {
  const bgc = useSelector(
    (rootReducer) => rootReducer.changeColorReducer.color
  );
  const dispatch = useDispatch();

  return (
    <div>
      <div
        style={{
          width: 200,
          height: 200,
          backgroundColor: bgc,
        }}
      />

      <button
        onClick={() => {
          dispatch(changeColor("green"));
        }}
      >
        green
      </button>
      <button
        onClick={() => {
          dispatch(changeColor("blue"));
        }}
      >
        blue
      </button>
      <button
        onClick={() => {
          dispatch(changeColor("yellow"));
        }}
      >
        yellow
      </button>
    </div>
  );
}

export default ChangeColor;
