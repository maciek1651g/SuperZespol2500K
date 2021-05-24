import React, { Component } from "react";
import styles from "../LoginPage/loginStyle.module.css";
import ListElement from "./ListElement";
import stylesGroupView from "./stylesGroupView.module.css";
export default class Card extends Component {
  render() {
    return (
      <>
        <div className={stylesGroupView.groupBox}>
          <ListElement color={this.props.color} />
          <p style={{ fontSize: "1.6em", margin: "0" }}>{this.props.lesson}</p>
          <p className={stylesGroupView.groupNumber}>
            Grupa {this.props.group}
          </p>
          <div>
            <button
              className={styles.errorButton + " " + styles.buttonStyle}
              onClick={() =>
                this.props.openPosts(this.props.lesson, this.props.group)
              }
            >
              PRZEJDŹ DO GRUPY
            </button>
          </div>
        </div>
      </>
    );
  }
}
