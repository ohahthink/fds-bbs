import React, { Component } from "react";
import api from "../api";
import Layout from "./Layout";
import { UserConsumer } from "../contexts/UserContext";

export default class PostDetail extends Component {
  // 상태를 만들어준다
  constructor(props) {
    super(props);
    // 이 컴포넌트가 그려지는 시점에는 바디랑 타이틀을 아직 서버로부터 자료를 아직 가져오지 않았을 때는 빈문자열을 보여주고 있다가
    // 자료를 가져왔을땐 가져온 자료를 보여주기 위해서입니다
    this.state = {
      body: "",
      title: "",
      userId: null
    };
  }

  // 화면이 표시되는 시점에 데이터가 필요하기 때문에 컴포넌트디드마운트를 해줍니다
  async componentDidMount() {
    // res.data가 객체라서 그 객체에 대한 분해대입을 한 것입니다
    // 받아온 데이터를 title, body에 넣어눕니다
    const {
      data: { title, body, userId }
    } = await api.get(`/posts/${this.props.postId}`);
    this.setState({
      title,
      body,
      userId
    });
  }

  render() {
    const { postId, onEditPostFormPage } = this.props;
    const { title, body } = this.state;
    return (
      <Layout>
        <h1>게시물 페이지</h1>
        <UserConsumer>
          {({ id }) => {
            if (this.state.userId === id) {
              return <button onClick={() => onEditPostFormPage(postId)}>수정</button>;
            }
          }}
        </UserConsumer>

        <div>{title}</div>
        <div>{body}</div>
      </Layout>
    );
  }
}
