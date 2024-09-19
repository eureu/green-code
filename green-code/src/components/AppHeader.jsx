import { Button, Flex } from "antd";
import { Link } from "react-router-dom";
import {useState} from 'react';
import ModalAddAnimal from './ModalAddAnimal/ModalAddAnimal.tsx'

const fontStyle = { fontSize: "16px", color: "#FAF2F2", textDecoration: 'none' };

export default function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false)
 
  return (<>
    <header
      style={{ height: "48px", backgroundColor: "#6FB0A5", width: "100%" }}
    >
      <div
        className="header-content"
        style={{
          display: "flex",
          padding: "0 0 0 3rem",
          height: "48px"
        }}
      >
        <Link to="/" style={fontStyle}>
        <img
          src="image.svg"
          alt=""
          style={{
            width: "32px",
            height: "32px",
            marginTop: "17px"
          }}
        />
        </Link>
        <Link to="/" style={fontStyle}>
        <div
          className="title"
          style={{
            marginLeft: "1rem",
            lineHeight: "1.2",
            color: "#FAF2F2",
            fontSize: "16px",
            marginTop: "16px"
          }}
        >
          <strong>Красная книга Москвы</strong>
        </div>
        </Link>
        

        <Flex
          style={{
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            marginTop: "10px",
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
          <button style={{color: '#353535', fontWeight: "700", marginTop: "-10px", padding: '4px 16px', backgroundColor: '#F8F8F8', borderRadius: '8px', border: 'none'}} onClick={() => {setModalOpen(true)}}>Загрузить фото</button>
        </Flex>
      </div>
    </header>
    <ModalAddAnimal setModalOpen={setModalOpen} modalOpen={modalOpen}/>
    </>
  );
}
