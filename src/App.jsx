// == Nơi để show những component lên trên giao diện ==
import CardRFC from "./card-rfc";
import CardRCC from "./card-rcc";
import HomePage from "./modules/buoi-1/home-page/home-page";
import BindingData from "./modules/buoi-1/binding-data/binding-data";
import HandleEvent from "./modules/buoi-1/binding-data/handle-event";
// Function component
/**
 * Lưu ý:
 * - Khi tạo một component thì phải đặt tên chữ Hoa viết đầu.
 * - Để phân biệt với các thẻ HTML. (div, p, h1, section, ...)
 */
function App() {
  return (
    <div className="app">
      {/* <HandleEvent /> */}

      {/* <BindingData /> */}

      {/* Cách sử dụng 1 component tự tạo */}
      {/* Cách 1: Thẻ mở + Thẻ đóng */}
      {/* <CardRCC></CardRCC> */}
      {/* Cách 2: Thẻ vừa mở vừa đóng */}
      {/* <CardRCC /> */}
      {/* shift + alt + arrow down */}
      {/* <CardRFC />
    <CardRFC />
    <CardRFC /> */}

      {/* <HomePage /> */}

      {/* <CardRFC />
      <CardRCC /> */}
    </div>
  );
}

export default App;
