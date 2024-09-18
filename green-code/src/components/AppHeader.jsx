import { Button, Flex } from "antd";
import { Link } from "react-router-dom";

const fontStyle = { fontSize: "24px", color: "#FAF2F2" };

export default function AppHeader() {
  return (
    <header
      style={{ height: "100px", backgroundColor: "#6FB0A5", width: "100%" }}
    >
      <div
        className="header-content"
        style={{
          display: "flex",
          padding: "10px 0 10px 3rem",
          height: "100px"
        }}
      >
        <img
          src="image.svg"
          alt=""
          style={{
            width: "80px",
            height: "80px"
            // paddingLeft: "3rem"
          }}
        />
        <div
          className="title"
          style={{
            marginLeft: "1rem",
            lineHeight: "1.2",
            color: "#FAF2F2",
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
          <Link to="/animals" style={fontStyle}>
            Животные
          </Link>

          <Link to="/plants" style={fontStyle}>
            Растения
          </Link>
          <Link to="/mushrooms" style={fontStyle}>
            Грибы
          </Link>
          <Link to="/parks" style={fontStyle}>
            Парки
          </Link>
          {/* <Button
            type="primary"
            style={{
              width: "137px",
              height: "53px",
              backgroundColor: "#6FB0A5"
            }}
          >
            <span style={{ fontSize: "24px" }}>Войти</span>
          </Button> */}
        </Flex>
      </div>
    </header>
  );
}
