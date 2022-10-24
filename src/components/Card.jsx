import { React } from "react";
import { useNavigate } from "react-router-dom";

export let Card = (props) => {
  const nav = useNavigate();
  const updateSomething = () => {
    console.log("updateSomething ran bish");
    props.coinss.function;
  };
  return (
    <div>
      <div>
        <div className="Card" /* onClick={() => nav(`opencoin`)} */>
          <img
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                "http://books.google.com/books/content?id=FDJBgvXyZrsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api";
            }}
            alt=" 3 cats"
            height="300"
            width="300"
            src={props.coinss[10]}
            onMouseOut={() => console.log("out of hover")}
            onMouseOver={() => console.log("into hover")}
          />
          <div>bluh: {props.coinss[0]}</div>
          <button onClick={updateSomething}>press me 2 update something</button>
          <div style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
          <p>toileth: {props.coinss[1]}</p>
          <div>coinss: </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};
