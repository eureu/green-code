import { Button, Input } from "antd";

export default function Finder() {
  const mainContentFindParkButton = {
    // height: "53px",
    // width: "201px",
    borderRadius: "8px",
    backgroundColor: "#6FB0A5",
    padding: "12px 32px 12px 32px",
    // width: "10%",
    marginLeft: "3rem",
    color: "#f8f8f8"
  };
  return (
    <div
      className="finder"
      style={{
        paddingBottom: "3rem",
        width: "70%",
        display: "flex",
        height: "5rem"
      }}
    >
      <Input
        allowClear
        variant="filled"
        placeholder="Зарядье"
        style={
          {
            // width: "60%"
            // paddingRight: "3rem"
          }
        }
      />
      <Button style={mainContentFindParkButton}>найти парк</Button>
    </div>
  );
}
