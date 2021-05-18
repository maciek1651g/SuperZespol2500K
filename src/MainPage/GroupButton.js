import stylesMainPage from "./stylesMainPage.module.css";
import stylesGroupView from "./stylesGroupView.module.css";
import { Badge } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import NewGroup from "./NewGroup";
import SearchGroup from "./SearchGroup";
import * as Icon from "react-feather";

function openNewGroupModal() {
  document.getElementById("modalNewGroup").style.display = "block";
}
function openSearchGroupModal() {
  document.getElementById("modalSearchGroup").style.display = "block";
}
function closeNewGroupModal() {
  document.getElementById("modalNewGroup").style.display = "none";
}
function closeSearchGroupModal() {
  document.getElementById("modalSearchGroup").style.display = "none";
}
const GroupButton = () => {
  function toogleMenu() {
    let dropdownDisplay = document.getElementById("myDropdown").style.display;
    if (dropdownDisplay === "block") {
      document.getElementById("myDropdown").style.display = "none";
    } else {
      document.getElementById("myDropdown").style.display = "block";
    }
  }

  return (
    <>
      <div id="modalNewGroup" className={stylesMainPage.modal}>
        <div className={stylesMainPage.modalContent}>
          <span
            onClick={() => closeNewGroupModal()}
            className={stylesMainPage.close}
          >
            &times;
          </span>
          <h2 style={{ margin: "30px 5%" }}>Dodaj Nową Grupę</h2>
          <NewGroup text1="Prowadzący" text2="Jan Kowal" />
          <NewGroup text1="Link do zespołu" text2="DODAJ LINK" />
          <NewGroup text1="Numer sali" text2="10a" />
          <NewGroup text1="Pokój prowadzącego" text2="12b" />
          <NewGroup text1="Termin konsultacji" text2="Wtorki 10:00-11:30" />

          <button
            className={stylesGroupView.messageButton}
            style={{ margin: "30px 5%" }}
          >
            <p>DODAJ GRUPĘ</p>
          </button>
        </div>
      </div>
      <div id="modalSearchGroup" className={stylesMainPage.modal}>
        <div className={stylesMainPage.modalContent}>
          <span
            onClick={() => closeSearchGroupModal()}
            className={stylesMainPage.close}
          >
            &times;
          </span>
          <h2 style={{ margin: "30px 5%" }}>Znajdź Grupę</h2>
          <div className={stylesMainPage.writeGroupName}>
            <Icon.Search width="20" height="20" color="#4cd5df" />
            <small style={{ color: "#979797", marginLeft: "10px" }}>
              Wpisz nazwę grupy...
            </small>
          </div>
          <SearchGroup group="Paradygmaty Programowania" />
          <SearchGroup group="Wstęp do Programowania" />
          <SearchGroup group="Programowanie Komponentowe" />
          <SearchGroup group="Grafika Komputerowa" />
          <SearchGroup group="Analiza Matematyczna" />
        </div>
      </div>
      <div
        className={stylesMainPage.dotsDropdown}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Badge className={stylesMainPage.threeDotsBox}>
          <div
            className={stylesMainPage.threeDotsButton}
            onClick={() => toogleMenu()}
          >
            <MoreVertIcon
              className={stylesMainPage.threeDots}
              style={{ paddingBottom: "0px" }}
            />
          </div>

          <div className={stylesMainPage.dropdownContext} id="myDropdown">
            <Badge className={stylesMainPage.threeDotsBoxOpen}>
              <AddBoxOutlinedIcon
                id="addGroupButton"
                onClick={() => openNewGroupModal()}
                className={stylesMainPage.threeDots}
              />
              <SearchIcon
                id="searchGroupButton"
                style={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  cursor: "pointer",
                }}
                onClick={() => openSearchGroupModal()}
                className={stylesMainPage.threeDots}
              />
            </Badge>
          </div>
        </Badge>
      </div>
    </>
  );
};

export default GroupButton;
