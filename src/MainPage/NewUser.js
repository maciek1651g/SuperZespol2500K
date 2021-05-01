import React, { Component } from "react";
import * as Icon from "react-feather";
import stylesGroupView from "./stylesGroupView.module.css";
export default class NewInfo extends Component {
  render() {
    return (
      <>
        <div className={stylesGroupView.userBox}>
          <div className={stylesGroupView.width33}>
            <div className={stylesGroupView.avatar}></div>
            <p style={{ margin: "0px", marginLeft: "20px" }}>
              {this.props.text1}
            </p>
          </div>

          <p
            className={stylesGroupView.width33}
            style={{
              color: "#979797",
              fontSize: "0.8rem",
              justifyContent: "center",
            }}
          >
            <p style={{ margin: "0px", marginRight: "20px" }}>
              {this.props.text2}
            </p>

            <Icon.Star width="30" height="30" color="#979797" />
          </p>
          <div
            className={stylesGroupView.width33}
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ margin: "0 15px" }}>
              <Icon.UserX width="30" height="30" color="#979797" />
            </div>
            <div style={{ margin: "0 5px" }}>
              <Icon.Edit3 width="30" height="30" color="#979797" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
