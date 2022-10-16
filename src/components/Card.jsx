import { React, useNavigate } from "react";

export let Card = (props) => {
  /*   const nav = useNavigate();
   */
  function truncate(str) {
    if (str) {
      return str.length > 17 ? str.substring(0, 13) + "..." : str;
    }
  }

  /*   function dataOrDefault() {
    const defaultLink =
      "https://www.artic.edu/iiif/2/d68a3f34-411d-efd4-154e-48b9c565b125/full/843,/0/default.jpg";

    if (props.item) {
      return props.item.image_id;
    } else return defaultLink;
  } */
  //const imageEndLink = "/full/843,/0/default.jpg";
  //const imageStartLink = "https://www.artic.edu/iiif/2/";

  //const artworkId = props.item.image_id;
  //let constructedLink = imageStartLink + artworkId + imageEndLink;

  return (
    <div>
      <div>
        <div className="card" onClick={() => nav(`opencoin`)}>
          <img
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                "http://books.google.com/books/content?id=FDJBgvXyZrsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api";
            }}
            alt=" 3 cats"
            height="300"
            width="300"
            src={props.imgSrc}
            onMouseOut={() => console.log("out of hover")}
            onMouseOver={() => console.log("into hover")}
          />
          <div style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
          <p>Coin name: {props.btcsPrice}</p>

          <p></p>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};
