import React, { Component } from 'react';
import api from '../api';
import PostForm from './PostForm';

export default class NewPostForm extends Component {
  async handleSubmit(title, body) {
    // 어디로 보낼거고, 보낼 내용은 {}
    const res = await api.post('/posts', {
      title,
      body,
    });
    // 새로 생성된 게시물 보여주기
    this.props.onPostDetailPage(res.data.id);
  }

  render() {
    return (
      <PostForm onSubmit={(title, body) => this.handleSubmit(title, body)} />
    );
  }
}
