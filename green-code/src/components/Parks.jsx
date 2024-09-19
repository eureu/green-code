import AppHeader from "./AppHeader";
import Footer from "./Footer";
import Finder from "./Finder";
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";



export default function Parks() {
  const [data, setData] = useState({data: []})
  const navigate = useNavigate();

    useEffect(()=> {
            fetch('http://194.58.98.44:8000/api/v1/get_parks').then(res => {
                if(res.ok)
                return (res.json())
                else {
                    return new Error("ошибка в запросе")
                }

            }).then(ans => setData(ans))
            .catch(err => console.log(err))
    }, [])


  return (
    <>
      <AppHeader />
      <div className="content" style={{ width: "65%", paddingLeft: "3rem" }}>
        <h1
          style={{
            paddingBottom: "1rem",
            paddingTop: "1rem",
            fontSize: "24px"
          }}
        >
          Парки
        </h1>
        <section style={{ fontSize: "16px", paddingBottom: "1rem" }}>
          Выберите парк, в котором собираетесь прогуляться и посмотрите список
          краснокнижных видов, которые там можно найти
        </section>

        <div>
          <Finder />

          {(data.data).slice(0, 2).map(item => 
            <div
            onClick={() => {navigate(`/park/${item[0]}`)}}
            className="park-list-element"
            style={{
              // backgroundImage: `url('${item[6]}')`,
              backgroundImage: "url('zaryadye_2.png')",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100px",
              position: "relative",
              marginBottom: '12px',
            }}
          >
          <span  style={{
            position: "absolute",
            backgroundColor: "0",
            bottom: "0",
            left: "0",
            padding: "10px",
            fontSize: "16px",
            color: "#F8F8F8",
            fontWeight: "700"
          }}>{item[1]}</span>
           </div>

            )}

          <div
            className="park-list-element"
            style={{
              backgroundImage: "url('zaryadye_2.png')",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100px",
              position: "relative"
            }}
          >
            <span
              style={{
                position: "absolute",
                backgroundColor: "0",
                bottom: "0",
                left: "0",
                padding: "10px",
                fontSize: "16px",
                color: "#F8F8F8",
                fontWeight: "700"
              }}
            >
              Зарядье
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
