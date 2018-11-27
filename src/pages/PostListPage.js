import React, { Component } from "react";
import Layout from "../components/Layout" //import해줍니다
import PostList from "../containers/PostList";

// postlist로 간 내용들은 다 지워줍니다
export default class PostListPage extends Component {
  
  render() {
    const { onPostDetailPage, onNewPostFormPage, onLoginFormPage } = this.props
    
    return (
        // div이름을 Layout으로 변경해줌
        // 같은 레이아웃을 이런식으로도 페이지마다 동일하게 사용해 줄 수도 있습니다
      <Layout title="게시물 목록" onLoginFormPage={onLoginFormPage}>
        <PostList onPostDetailPage={onPostDetailPage} onNewPostFormPage={onNewPostFormPage} />
      </Layout>
    );
  }
}
