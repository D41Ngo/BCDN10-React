import React, { useCallback, useState, useMemo, useRef } from "react";

/**
 * Out put: lấy dữ liệu từ form.
 * In put: Xét lại giá trị của thẻ 'form'
 *
 * two way binding
 */

const _useCallback = (fn, deps) => {
  return fn;
};
const _useMemo = (fn, desp) => {
  return fn();
};

function fibonacci(n, memo = {}) {
  if (n <= 1) {
    return n;
  }

  if (memo[n]) {
    return memo[n];
  }

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

  return memo[n];
}

function Input() {
  const [name, setName] = useState("Cyber Soft");

  //  Lưu lại, không khởi tạo mới
  const name2 = useRef("");

  // 1. [Cyber Soft] 0x1111
  // 2. [Cyber Softa] 0x2222
  // 2. [Cyber Softab] 0x3333
  const handleGetName = useCallback(() => {
    console.log("[name]", name);
  }, [name]);

  const result = useMemo(() => {
    console.log("hihi");
    return fibonacci(50);
  }, [name]);

  return (
    <div>
      <p>Fibonacci - 1000: {result}</p>

      <div
        style={{
          padding: 10,
          display: "flex",
          gap: 5,
        }}
      >
        <input
          placeholder="name"
          value={name}
          // Khác với onchange của javascript
          onChange={(event) => {
            console.log("value:::", event.target.value);
            setName(event.target.value);
          }}
        />

        <button onClick={handleGetName}>Get Name</button>
      </div>

      <div
        style={{
          padding: 10,
          display: "flex",
          gap: 5,
        }}
      >
        <input
          placeholder="name 2"
          onChange={(e) => {
            name2.current = e.target.value;
          }}
        />

        <button
          onClick={() => {
            console.log("[name2]", name2.current);
          }}
        >
          Get Name 2
        </button>
      </div>
    </div>
  );
}

export default Input;
