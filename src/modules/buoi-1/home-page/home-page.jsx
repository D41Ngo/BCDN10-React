import { Component } from "react";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Navigation from "./naviagtion";

export default class HomePage extends Component {
  render() {
    // Fragment: Nhiệm vụ bao bọc toàn bộ nội dung giao diện trả về tránh cùng cấp
    // Fragment: sẽ không có trên giao diện.
    // Chú ý: Không return về những thẻ cùng cấp với nhau, phải có một thẻ lớn nhất bao bọc ngoài cùng.
    // Babel: <> => <Fragment>

    return (
      <>
        <h1>Home Component</h1>

        <Header />

        <div className="row">
          <div className="col-6">
            <Navigation />
          </div>
          <div className="col-6">
            <Content />
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
