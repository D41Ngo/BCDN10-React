import React, { createContext, useState, useContext } from "react";

/**
 * Tương tự giống Redux.
 * -
 */
// Tạo context store (1)
const AudioContextStore = createContext(20);

// Bọc các component muốn sử dụng giá trị context store bởi Provider (3)
// (2)
export function AudioProvider(props) {
  // Provider Là nơi lưu trữ state của context.
  const [count, setCount] = useState(10);

  const value = [count, setCount];

  return (
    <AudioContextStore.Provider value={value}>
      {props.children}
    </AudioContextStore.Provider>
  );
}
// Tạo context store

// -------------------------
function UseContext() {
  const value = useContext(AudioContextStore);

  return (
    <div>
      A: {value[0]}
      <A />
    </div>
  );
}

function A() {
  const [, setC] = useContext(AudioContextStore);

  return (
    <div>
      <h2>A</h2>
      <button
        onClick={() => {
          // setC(10) trực tiếp
          // setC(c + 1)
          // -----
          // callBack function
          // prev: là giá trị của state trước đó
          setC((prev) => {
            // return để xét lại giá trị
            return prev + 1;
          });
        }}
      >
        Tăng Count
      </button>
      <hr />
      <B />
    </div>
  );
}
function B() {
  // Store muốn lấy vào
  const value = useContext(AudioContextStore);

  return (
    <div>
      <h2>B</h2>
      <p>Count: {value[0]}</p>
    </div>
  );
}

export function C() {
  const value = useContext(AudioContextStore);

  console.log("C:::", value);
  return (
    <>
      <h2>C</h2>
    </>
  );
}

export default UseContext;
