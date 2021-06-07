import React from "react";
import stylesMainPage from "./stylesMainPage.module.css";

const NewGroup = (props) => {
  return (
    <>
      <div className={stylesMainPage.groupInfo}>
        <p style={{ fontWeight: "bold", width: "50%" }}>{props.text1}</p>
        <input
            id={props.id}
          style={{
            fontWeight: "500",
            color: "black",
            width: "50%",
            textAlign: "center",
          }}
          placeholder={props.text2}
        />
      </div>
    </>
  );
};
export default NewGroup;
