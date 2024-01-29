import React, { memo } from "react";

/**
 * 100%: Đối với icon
 * - tạo function component
 * - bọc lại với memo
 */

function IconLamp() {
  return (
    <svg
      width="64px"
      height="64px"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          d="M6.56861 3.88582C7.0242 2.74685 8.12733 2 9.35404 2H14.6459C15.8726 2 16.9758 2.74686 17.4313 3.88584L19.8313 9.88584C20.6195 11.8564 19.1683 14 17.0459 14H13V20H16C16.5523 20 17 20.4477 17 21C17 21.5523 16.5523 22 16 22H8C7.44772 22 7 21.5523 7 21C7 20.4477 7.44772 20 8 20H11V14H6.95401C4.83161 14 3.38034 11.8564 4.16858 9.88582L6.56861 3.88582Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default memo(IconLamp); // 2
// so sánh props có thay đổi hay cập nhật hay không mới re-render component
// memo(IconLamp): trả về 1 component

// High Order Component: HOC
function _memo(Cp) {
  return function Child() {
    return <Cp />;
  };
}
