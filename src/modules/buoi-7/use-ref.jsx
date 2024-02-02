import React, { useEffect, useRef } from "react";

/**
 * {
 *  tag: 'html',
 *  children: [
 *  {
 *      tag:'body'
 *      children:[]
 *  },
 *  {
 *      tag: 'head',
 *      children:[]
 *  }
 * ]
 * }
 *
 */

// Virtual Dom
// 1. Dom tới 1 phần tử trên giao diện.
// 2.
function UseRef() {
  const divRef = useRef(); // đối tượng có 1 thuộc tính là current
  const btnRef = useRef(); // đối tượng có 1 thuộc tính là current

  useEffect(() => {
    // console.log(document.getElementById("ref")); //  khác null

    console.log(divRef);
    // divRef.current
    divRef.current.style.color = "green";

    // btnRef.current
  }, []);

  return (
    <div ref={divRef} id="ref">
      UseRef
      <button ref={btnRef}>Click me</button>
    </div>
  );
}

export default UseRef;
