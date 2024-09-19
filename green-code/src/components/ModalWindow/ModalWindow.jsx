import { Modal } from "antd";
import { useState } from "react";
export default function ModalWindow() {
  const [modal, setModal] = useState(false);
  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}
