import React from "react";
import stylesMainPage from "./stylesMainPage.module.css";
import stylesGroupView from "./stylesGroupView.module.css";

const SearchGroup = (props) => {
  return (
    <>
      <div className={stylesMainPage.groupInfo}>
        <p style={{ fontWeight: "bold", width: "50%" }}>{props.group}</p>
        <button
          className={stylesGroupView.messageButton}
          style={{ margin: "0px 5%" }}
        >
          <p>DOŁĄCZ</p>
        </button>
      </div>
    </>
  );
};
export default SearchGroup;
