import { Layout, Button, Menu, ConfigProvider } from "antd";
const { Header, Content, Footer } = Layout;

const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`
}));

export default function AppHeader() {
  return (
    <Layout>
      <Header
        style={{
          padding: 0
        }}
      >
        <div className="demo-logo" />
        <Menu
          className="custom-header"
          theme="light"
          mode="horizontal"
          // defaultSelectedKeys={["2"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            padding: 0
          }}
        />
      </Header>
    </Layout>
  );
}
