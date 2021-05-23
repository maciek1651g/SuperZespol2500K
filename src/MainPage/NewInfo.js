import React, { Component } from "react";
import * as Icon from "react-feather";
import stylesGroupView from "./stylesGroupView.module.css";
export default class NewInfo extends Component {
  render() {
    return (
      <>
        <div className={stylesGroupView.infoBox}>
          <p>{this.props.text1}</p>
          <p
            style={{
              color: "#979797",
              fontSize: "0.8rem",
              justifyContent: "center",
            }}
          >
            {this.props.text2}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Icon.Edit3
              width="30"
              height="30"
              color="#979797"
              className={stylesGroupView.svgButton}
            />
          </div>
        </div>
      </>
    );
  }
}
