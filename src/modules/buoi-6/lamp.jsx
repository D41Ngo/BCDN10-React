import React, { useState } from "react";
import IconLamp from "../../icons/lamp";

export default function Lamp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        style={{
          color: isOpen ? "blue" : "red",
        }}
      >
        {/* <img src="/icons/lamp.svg" /> */}
        {/* js + css */}
        {/* <IconLamp color={isOpen ? "blue" : "red"} /> */}

        {/* css */}
        <IconLamp />
      </div>
      <hr />
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Bật
      </button>
      <button
        onClick={() => {
          setIsOpen(false);
        }}
      >
        Tắt
      </button>
    </div>
  );
}
