import React, { useEffect, useState } from "react";

function CleanUp() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  // 2 * 4 * 8 * 16 * 32
  //   window.addEventListener("mousemove", (event) => {
  //     setPosition({
  //       x: event.x,
  //       y: event.y,
  //     });
  //   });

  //   window.onmousemove = (event) => {
  //     setPosition({
  //       x: event.x,
  //       y: event.y,
  //     });
  //   };

  useEffect(() => {
    // Chỉ chạy 1 lần duy nhất
    const handleMouseMove = (event) => {
      setPosition({
        x: event.x,
        y: event.y,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Hàm cleanUp sẽ chạy trước khi component un-mount: (xóa khỏi dom)
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        transform: "translate(-50%,-50%)",

        width: 40,
        height: 40,
        backgroundColor: "pink",
        borderRadius: "50%",
        zIndex: -1,
      }}
    ></div>
  );
}

export default CleanUp;
