import React from "react";
import stylesMainPage from "./stylesMainPage.module.css";

const NewGroup = (props) => {
  return (
    <>
      <div className={stylesMainPage.groupInfo}>
        <p style={{ fontWeight: "bold", width: "50%" }}>{props.text1}</p>
        <p
          style={{
            fontWeight: "500",
            color: "#979797",
            width: "50%",
            textAlign: "center",
          }}
        >
          {props.text2}
        </p>
      </div>
    </>
  );
};
export default NewGroup;
