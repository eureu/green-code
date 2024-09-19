import { Button, Input } from "antd";

export default function Finder({ text, placeholder }) {
  const mainContentFindParkButton = {
    // height: "53px",
    // width: "201px",
    borderRadius: "8px",
    backgroundColor: "#6FB0A5",
    // padding: "12px 32px 12px 32px",
    // width: "10%",
    // marginLeft: "32px",
    color: "#f8f8f8",
    width: "17.5%",
    height: "100%"
    // height: "3rem"
  };
  return (
    <div
      className="finder"
      style={{
        // paddingBottom: "1rem",
        // width: "70%",
        display: "flex",
        gap: "2rem",

        height: "2.5rem",
        alignItems: "center"

        // alignItems: "center",
        // gap: "2rem"
      }}
    >
      <Input
        allowClear
        variant="filled"
        placeholder={placeholder}
        style={{
          border: "none",
          width: "52.5%",
          height: "100%"
          // padding: "1rem"
        }}
      />
      <Button style={mainContentFindParkButton}>{text}</Button>
    </div>
  );
}
