import React, { Component } from "react";

import { UserConsumer, withUser } from "../contexts/UserContext";

class Layout extends Component {
  render() {
    const { onLoginFormPage, username, logout } = this.props;
    return (
      <div>
        <div className="header">
          헤더
          <div>{username}</div>
          {username ? (
            <button onClick={logout}>로그아웃</button>
          ) : (
            <button onClick={onLoginFormPage}>로그인</button>
          )}
        </div>
        <h1 className="title">{this.props.title}</h1>
        {/* 헤더랑 푸터 사이에 뭔가 내용을 넣고 싶을 때, 감싸고 싶을 때 */}
        {this.props.children}
        <div className="footer">푸터</div>
      </div>
    );
  }
}

export default withUser(Layout);
