import React, { Component } from "react";
import api from "../api";
import Layout from "./Layout" //import해줍니다
import {UserConsumer} from '../contexts/UserContext'

export default class PostList extends Component {
  // rconst 탭 하면 생성자 알아서 촤르륵 됩니다
  constructor(props) {
    super(props);

    this.state = { posts: [], loading: false };
  }

  // 상호작용이 일어나는 것은 아니지만, 사용자가 뭔가 누르면 상태를 업데이트 해줘서 게시물 목록을 보여주는 것
  // 처음 페이지를 그려줄 때
  // componentDidMount가 비동기 함수라 할지라도, 리액트는 기다려주지 않습니다
  // post-list가 최초로 한번 그려지면 그려지고 난 뒤 componentDidMount가 실행됩니다 ( 즉, 데이터를 다 받아오고 난 후 그리는것이 아닙니다 ), 한번 그려지고 다시 그려지는것입니다
  // componentLilMount도 마찬가지 입니다

  async componentDidMount() {
    // 파일이름으로 default되어있는 것들은 알아서 import시켜줍니다
    const res = await api.get("/posts");
    this.setState({ posts: res.data });
  }

  render() {
    const { posts } = this.state;
    const { onPostDetailPage, onNewPostFormPage } = this.props
    return (
        // div이름을 Layout으로 변경해줌
        // 같은 레이아웃을 이런식으로도 페이지마다 동일하게 사용해 줄 수도 있습니다
      <Layout title="게시물 목록">
        <button onClick={() => onNewPostFormPage()}>새 글 쓰기</button>
        <h1>게시물 목록</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id} onClick={() => onPostDetailPage(post.id)} >{post.title}</li>
          ))}
        </ul>
      </Layout>
    );
  }
}
