import { Layout, Button, Flex } from "antd";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ParkMap from "./ParkMap.jsx";

const fontStyle = { fontSize: "24px", color: "#353535" };

export default function AppHeader() {
  return (
    // <Router>
    // <Layout.Header
    //   className="header-main"
    // style={{ height: "100px", backgroundColor: "#f8f8f8", width: "100%" }}
    // >

    <header
      style={{ height: "100px", backgroundColor: "#f8f8f8", width: "100%" }}
    >
      <div
        className="header-content"
        style={{ display: "flex", padding: "10px 0 10px 0", height: "100px" }}
      >
        <img
          style={{ width: "80px", height: "80px" }}
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <div
          className="title"
          style={{
            marginLeft: "1rem",
            lineHeight: "1.2",
            color: "#000",
            fontSize: "24px"
          }}
        >
          <strong>Красная книга Москвы</strong>
        </div>

        <Flex
          style={{
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%"
          }}
        >
          {/* <Link to="/parks" style={fontStyle}>
            Парки
          </Link>
          <Link to="#" style={fontStyle}>
            Животные
          </Link>
          <Link to="#" style={fontStyle}>
            О чем этот проект?
          </Link> */}

          <a href="#" style={fontStyle}>
            Парки
          </a>

          <a href="#" style={fontStyle}>
            Парки
          </a>
          <a href="#" style={fontStyle}>
            Парки
          </a>
          <Button
            type="primary"
            style={{
              width: "137px",
              height: "53px",
              backgroundColor: "#6FB0A5"
            }}
          >
            <span style={{ fontSize: "24px" }}>Войти</span>
          </Button>
        </Flex>
      </div>
      {/* </Layout.Header> */}
    </header>
    // <Routes>
    //   <Route path="/parks" element={<ParkMap />} />
    // </Routes>
    // </Router>
  );
}
