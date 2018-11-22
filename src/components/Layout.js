import React, { Component } from "react"

import {UserConsumer} from '../contexts/UserContext'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className="header">
          헤더
          <UserConsumer>
          {({ username }) => <div>{username}</div>}
          </UserConsumer>
        </div>
        <h1 className="title">{this.props.title}</h1>
        {/* 헤더랑 푸터 사이에 뭔가 내용을 넣고 싶을 때, 감싸고 싶을 때 */}
        {this.props.children}
        <div className="footer">푸터</div>
      </div>
    );
  }
}
