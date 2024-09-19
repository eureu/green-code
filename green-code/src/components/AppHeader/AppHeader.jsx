import { Button, Flex, Drawer } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
// import ModalAddAnimal from "./ModalAddAnimal/ModalAddAnimal.tsx";
import style from "./AppHeader.module.css";

const fontStyle = { fontSize: "16px", color: "#FAF2F2" };

export default function AppHeader({ paddingLeft }) {
  // const [modalOpen, setModalOpen] = useState(false)
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      <header
        style={{
          height: "3.375rem",
          backgroundColor: "#6FB0A5",
          width: "100%",
          position: "fixed",
          top: "0"
          // display: "flex"
        }}
      >
        <div
          className={style.headerContent}
          style={
            {
              // display: "flex",
              // padding: "0 0 0 3rem",
              // height: "48px"
              // height: "100%"
              // position: "fixed",
              // top: 0,
              // paddingLeft: paddingLeft
              // paddingLeft: "9.75rem"
              // justifyContent: "space-between"
              // alignItems: "center"
            }
          }
        >
          <img
            src="image.svg"
            alt=""
            style={{
              width: "32px",
              height: "32px"
              // marginTop: "5px"
              // paddingLeft: "3rem"
            }}
          />
          <div className={style.title} style={{}}>
            <strong>Красная книга Москвы</strong>
          </div>

          <Flex className={style.flex}>
            <Link to="/animals" className={style.flexText}>
              Животные
            </Link>

            <Link to="/plants" className={style.flexText}>
              Растения
            </Link>
            <Link to="/mushrooms" className={style.flexText}>
              Грибы
            </Link>
            <Link to="/parks" className={style.flexText}>
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
            <button
              className={style.downloadPhoto}
              // style={{
              // color: "#353535"
              // // padding: "4px 16px",
              // backgroundColor: "#F8F8F8",
              // borderRadius: "8px",
              // border: "none"
              // }}
              // onClick={() => {
              //   setModalOpen(true);
              // }}
            >
              Загрузить фото
            </button>
          </Flex>
          {/* <div className={style.optionButton}> */}
          <div className={style.drawerButtonContainer}>
            <button
              className={style.drawerButton}
              onClick={() => setDrawer(true)}
              style={{
                height: "16px",
                width: "16px",
                position: "absolute",
                right: "0"
              }}
            ></button>
          </div>
          <Drawer
            style={{ borderRadius: "8px" }}
            width={200}
            // title="Add Asset"
            onClose={() => setDrawer(false)}
            open={drawer}
            destroyOnClose={true}
          >
            <Flex className={style.flexColumn}>
              <button
                className={style.item}
                style={{
                  color: "#F8F8F8",
                  // padding: "4px 16px",
                  backgroundColor: "#6FB0A5",
                  borderRadius: "8px",
                  border: "none",
                  gap: "4px",
                  padding: "8px, 4px, 8px, 4px"

                  //
                }}
                // onClick={() => {
                //   setModalOpen(true);
                // }}
              >
                Загрузить фото
              </button>
              <Link to="/animals" className={style.item}>
                Животные
              </Link>

              <Link to="/plants" className={style.item}>
                Растения
              </Link>
              <Link to="/mushrooms" className={style.item}>
                Грибы
              </Link>
              <Link to="/parks" className={style.item}>
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
          </Drawer>
          {/* </div> */}
        </div>
      </header>
      {/* <ModalAddAnimal setModalOpen={setModalOpen} modalOpen={modalOpen} /> */}
    </>
  );
}
