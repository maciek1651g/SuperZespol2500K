import React, { Component } from "react";
import stylesGroupView from "./stylesGroupView.module.css";
export default class Message extends Component {
  render() {
    return (
      <>
        <div className={stylesGroupView.postsBox}>
          <div className={stylesGroupView.avatar}></div>
          <div className={stylesGroupView.detailsBox}>
            <p className={stylesGroupView.teacher}>{this.props.author}</p>
            <p className={stylesGroupView.date}>{this.props.date}</p>
          </div>

          <br />
          <p className={stylesGroupView.postDescription}>
            {this.props.description}
          </p>
        </div>
      </>
    );
  }
}
