import React, { Component } from "react";
import stylesGroupView from "./stylesGroupView.module.css";
import * as Icon from "react-feather";
export default class GroupViewIcons extends Component {
  render() {
    return (
      <>
        <div className={stylesGroupView.iconSet}>
          {this.props.active === 1 ? (
            <div
              className={stylesGroupView.iconBoxActive}
              onClick={() => this.props.changeSubpage(1)}
            >
              <Icon.Paperclip width="30" height="30" color="#4cd5df" />
            </div>
          ) : (
            <div
              className={stylesGroupView.iconBox}
              onClick={() => this.props.changeSubpage(1)}
            >
              <Icon.Paperclip width="30" height="30" color="#979797" />
            </div>
          )}
          {this.props.active === 2 ? (
            <div
              className={stylesGroupView.iconBoxActive}
              onClick={() => this.props.changeSubpage(2)}
            >
              <Icon.MessageSquare width="30" height="30" color="#4cd5df" />
            </div>
          ) : (
            <div
              className={stylesGroupView.iconBox}
              onClick={() => this.props.changeSubpage(2)}
            >
              <Icon.MessageSquare width="30" height="30" color="#979797" />
            </div>
          )}
          {this.props.active === 3 ? (
            <div
              className={stylesGroupView.iconBoxActive}
              onClick={() => this.props.changeSubpage(3)}
            >
              <Icon.User width="30" height="30" color="#4cd5df" />
            </div>
          ) : (
            <div
              className={stylesGroupView.iconBox}
              onClick={() => this.props.changeSubpage(3)}
            >
              <Icon.User width="30" height="30" color="#979797" />
            </div>
          )}
          {this.props.active === 4 ? (
            <div
              className={stylesGroupView.iconBoxActive}
              onClick={() => this.props.changeSubpage(4)}
            >
              <Icon.Tag width="30" height="30" color="#4cd5df" />
            </div>
          ) : (
            <div
              className={stylesGroupView.iconBox}
              onClick={() => this.props.changeSubpage(4)}
            >
              <Icon.Tag width="30" height="30" color="#979797" />
            </div>
          )}
        </div>
      </>
    );
  }
}
