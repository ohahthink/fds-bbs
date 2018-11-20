import React, { Component } from "react";
import api from "../api";
import PostForm from "./PostForm"

export default class NewPostForm extends Component {
  async handleSubmit(e) {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const body = e.target.elements.body.value;
    // 어디로 보낼거고, 보낼 내용은 {}
    const res = await api.post("/posts", {
      title,
      body
    })
    // 새로 생성된 게시물 보여주기
    this.props.onPostDetailPage(res.data.id);
  }

  render() {
    return (
      <PostForm onSubmit={e => this.handleSubmit(e)}/>
    )
  }
}
