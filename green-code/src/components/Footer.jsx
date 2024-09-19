import { Flex } from "antd";
import { Link } from "react-router-dom";

const fontStyle = { fontSize: "16px", color: "#FAF2F2" };

export default function Footer() {
  return (
    <footer
      style={{
        height: "48px",
        backgroundColor: "#6FB0A5",
        width: "100%",
        // position: "fixed",
        bottom: "0"
      }}
    >
      <div className="footer-content">
        <Flex
          style={{
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            paddingTop: "14.5px",
            paddingBottom: "14.5px"
          }}
        >
          <Link style={fontStyle}>Контакты</Link>
          <Link style={fontStyle}>Войти как сотрудник</Link>
        </Flex>
      </div>
    </footer>
  );
}
