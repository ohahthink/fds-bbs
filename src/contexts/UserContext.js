import React, { Component } from "react";
import api from "../api";

// provider기본값 생략된 코드
// login 관련된 기능을 userprovider한테 넘겨주고, loginform에서는 함수를 호출해주고 있습니다
const { Provider, Consumer } = React.createContext();

export default class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      username: null
    };
  }

  async componentDidMount() {
      if (localStorage.getItem('token')) {
        await this.refreshUser()
      }
  }

  async login(username, password) {
    // api설정 해줘야 합니다
    const res = await api.post("/users/login", {
      username,
      password
    })
    localStorage.setItem("token", res.data.token);
    await this.refreshUser()
    // TODO: 게시글 목록 보여주기
}  

logout() {
    // 로컬 스토리지에서 토큰 제거
    localStorage.removeItem('token')
    // 사용자 정보 캐시 초기화 (사본과 원본이 달라질 수 있으므로 항상 주의)
    this.setState({
        id: null,
        username: null
    })
    // 로그인 폼 보여주기
    // TODO: 로그인 폼 보여주기 (App컴포넌트의 상태를 바꿔줘야합니다)


}

    async refreshUser() {
          const res2 = await api.get("/me")
          this.setState({
              id: res2.data.id,
              username: res2.data.username
          })
    }


  render() {
    const value = {
      username: this.state.username,
      id: this.state.id,
      login: this.login.bind(this),
      logout: this.logout.bind(this)
    }
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

//named export 여러개 동시에 하고 싶을 때
export { UserProvider, Consumer as UserConsumer };
