import { React } from "react";
import { useNavigate } from "react-router-dom";
export let Card = (coinz) => {
  const nav = useNavigate();

  return (
    <div>
      <div>
        <div className="Card" onClick={() => nav(`opencoin`)}>
          <img
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                "http://books.google.com/books/content?id=FDJBgvXyZrsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api";
            }}
            alt=" 3 cats"
            height="300"
            width="300"
            src={coinz.imgSrc}
            onMouseOut={() => console.log("out of hover")}
            onMouseOver={() => console.log("into hover")}
          />
          <div>bluh: {coinz.btcsPrice}</div>
          <div style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
          <p>Coin name: {coinz ? coinz.btcsPrice : "nada 2 show sire"}</p>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};
