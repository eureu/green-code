import { Flex } from "antd";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        height: "100px",
        backgroundColor: "#6FB0A5",
        width: "100%",
        position: "fixed",
        bottom: "0"
      }}
    >
      <div style={{ display: "flex" }}>
        <Flex
          style={{
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            position: "absolute"
          }}
        >
          <Link>Contacts</Link>
          <Link>sing in as an employe</Link>
        </Flex>
      </div>
    </footer>
  );
}
