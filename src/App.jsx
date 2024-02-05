// == Nơi để show những component lên trên giao diện ==
import CardRFC from "./card-rfc";
import CardRCC from "./card-rcc";
import HomePage from "./modules/buoi-1/home-page/home-page";
import BindingData from "./modules/buoi-1/binding-data/binding-data";
import HandleEvent from "./modules/buoi-1/binding-data/handle-event";
import InlineStyle from "./modules/buoi-2/style/inline";
import ExternalStyle from "./modules/buoi-2/style/external";
import ExternalStyle2 from "./modules/buoi-2/style/external-2";
import ModuleStyle from "./modules/buoi-2/style/module";
import State from "./modules/buoi-2/state/state";
import FontSize from "./modules/buoi-2/state/font-size";
import ChangeColor from "./modules/buoi-2/state/change-color";
import RandomImage from "./modules/buoi-2/state/random-image";
import Array from "./modules/buoi-2/array/array";
import { Component, useState } from "react";
import Footer from "./modules/buoi-3/props/footer";
import Card from "./modules/buoi-3/props/card";
import Button from "./modules/buoi-3/props/button";
import BtProductList from "./modules/buoi-3/bt-product-list";
import PhoneShop from "./modules/buoi-3/phone-shop/phone-shop";
import DemoProps from "./modules/buoi-4/demo-props";
import TangGiamFontSize from "./modules/buoi-4/font-size";
import ReduxObject from "./modules/buoi-4/redux-object";
import LifeCycle from "./modules/buoi-5/life-cycle";
import FontSizeFC from "./modules/buoi-5/function-component/font-size";
import Lamp from "./modules/buoi-6/lamp";
import Random from "./modules/buoi-6/random";
import UseEffect from "./modules/buoi-6/use-effect";
import TodoList from "./modules/buoi-6/todo-list";
import CleanUp from "./modules/buoi-7/clean-up";
import CleanUp2 from "./modules/buoi-7/clean-up_2";
import DiaDiem from "./modules/buoi-7/dia-diem";
import UseRef from "./modules/buoi-7/use-ref";
import UseContext, { AudioProvider, C } from "./modules/buoi-7/use-context";
import { Counter, useCounter } from "./modules/buoi-7/custom-hook";
import Input from "./modules/buoi-8/input";
import AdminLaptop from "./modules/admin-laptop/admin-laptop";
// Function component
/**
 * Lưu ý:
 * - Khi tạo một component thì phải đặt tên chữ Hoa viết đầu.
 * - Để phân biệt với các thẻ HTML. (div, p, h1, section, ...)
 */

class Count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          {this.state.count}
        </button>
      </>
    );
  }
}

/**
 * Cấu trúc component thì giống nhau
 * Nhưng về nội dung thì sẽ khác nhau tùy thuộc vào người sử dụng
 */
class House extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            width: 100,
            height: 20,
            backgroundColor: this.props.mai || "black",
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: this.props.body || "blue",
          }}
        ></div>
      </div>
    );
  }
}

function App() {
  // const [show, setShow] = useState(true);

  return <AdminLaptop />;

  return (
    <div className="app" style={{ display: "flex", gap: 10 }}>
      <AdminLaptop />
      {/* <Input /> */}
      {/* <button onClick={handleTang5}>{count}</button> */}
      {/* <Counter /> */}
      {/* <AudioProvider>
        <UseContext />
      </AudioProvider>
      <C /> */}

      {/* <UseRef /> */}
      {/* <DiaDiem /> */}
      {/* <CleanUp2 /> */}
      {/* <TodoList /> */}
      {/* <UseEffect /> */}
      {/* <Random /> */}
      {/* <Lamp /> */}
      {/* <FontSizeFC /> */}
      {/* <ReduxObject /> */}
      {/* <TangGiamFontSize /> */}
      {/* <DemoProps /> */}
      {/* <PhoneShop /> */}
      {/* <BtProductList /> */}
      {/* <House mai="green" body="yellow" />
      <House mai="pink" body="orange" />
      <House />
      <House /> */}
      {/* <Button
        handleClick={() => {
          console.log("click me 1");
        }}
      >
        Click Me 1
      </Button>

      <Button
        handleClick={() => {
          console.log("click me 2");
        }}
      >
        Click Me 2
      </Button> */}

      {/* <Card
        img="https://i.pravatar.cc?img=1"
        contentBtn="Button 1"
        title="title 1"
        showButton={true}
      />
      <Card
        img="https://i.pravatar.cc?img=2"
        contentBtn="Button 2"
        title="title 2"
        showButton={false}
      /> */}
      {/* <Card
        img="https://i.pravatar.cc?img=2"
        contentBtn="Button 2"
        title="title 2"
      />
      <Card
        img="https://i.pravatar.cc?img=3"
        contentBtn="Button 3"
        title="title 3"
      />
      <Card
        img="https://i.pravatar.cc?img=4"
        contentBtn="Button 4"
        title="title 4"
      /> */}

      {/* name: tên props */}
      {/* CyberSoft | React: là giá trị của props đó */}
      {/* <Footer name="CyberSoft" />
      <Footer name="React" />
      <Footer name="React18" /> */}

      {/* <Count /> */}
      {/* <input placeholder="kkakakak" /> */}
      {/* <input placeholder="haha" /> */}
      {/* <Count />
      <Count />
      <Count /> */}

      {/* <Array /> */}
      {/* <RandomImage /> */}
      {/* <ChangeColor /> */}
      {/* <FontSize /> */}
      {/* <State /> */}
      {/* <ModuleStyle /> */}
      {/* <ExternalStyle /> */}
      {/* <ExternalStyle2 /> */}

      {/* <InlineStyle /> */}
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

// a();

function a() {
  console.log("1. [a] begin");
  b();
  c();
  console.log("2. [a] after");
}

function b() {
  console.log("3. [b] begin");
  c();
  console.log("4. [b] after");
}

function c() {
  console.log("5. [c] begin");
  console.log("6. [c] after");
}

// 123456
// 135642
// 135642
//
