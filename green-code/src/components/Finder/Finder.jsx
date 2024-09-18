import { Button, Input } from "antd";

export default function Finder({ text, placeholder }) {
  const mainContentFindParkButton = {
    // height: "53px",
    // width: "201px",
    borderRadius: "8px",
    backgroundColor: "#6FB0A5",
    padding: "12px 32px 12px 32px",
    // width: "10%",
    marginLeft: "32px",
    color: "#f8f8f8"
  };
  return (
    <div
      className="finder"
      style={{
        paddingBottom: "1rem",
        width: "70%",
        display: "flex",
        height: "5rem",
        alignItems: "center"
      }}
    >
      <Input
        allowClear
        variant="filled"
        placeholder={placeholder}
        style={{
          border: "none"
        }}
      />
      <Button style={mainContentFindParkButton}>{text}</Button>
    </div>
  );
}
