import { Flex } from "antd";
import { Link } from "react-router-dom";

const fontStyle = { fontSize: "16px", color: "#FAF2F2",  textDecoration: 'none'  };

export default function Footer() {
  return (
    <footer
      style={{
        height: "48px",
        backgroundColor: "#6FB0A5",
        width: "100%",
        position: "fixed",
        bottom: "0",
        zIndex: "100",
      }}
    >
      <div className="footer-content">
        <Flex
          style={{
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            width: "301px",
            margin: "0 auto",
            marginTop: "26px",
            fontWeight: "400",

          }}
        >
          <Link style={fontStyle}>Контакты</Link>
          <Link style={fontStyle}>Войти как сотрудник</Link>
        </Flex>
      </div>
    </footer>
  );
}
