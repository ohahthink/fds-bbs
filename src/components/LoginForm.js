import React from "react";
import { UserConsumer, withUser } from "../contexts/UserContext";

class LoginForm extends React.Component {
  // ref는 DOM노드를 가리키는 화살표
  // current는 가리키던 DOM노드를 가져옵니다
  constructor(props) {
    super(props);
    // DOM노드를 가리키는 화살표
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  // UserProvider로 옮겼습니다 밑 함수
  // async handleSubmit(e) {
  //     e.preventDefault()
  //     // username은 current를 사용한 예제
  //     // form을 안쓰고 제어되지 않는 컴포넌트를 가져오고 싶을때는 ref를 사용해야합니다, 폼을 쓰지 말아야할 때도 있기 때문입니다
  //     const username = this.usernameRef.current.value
  //     const password = e.target.elements.password.value
  //     // FIXME: 사용자 이름 중복체크 해야함
  //     // api설정 해줘야 합니다
  //     const res = await api.post('/users/login', {
  //         username,
  //         password
  //     })
  //     localStorage.setItem('token', res.data.token)
  //     // TODO: 게시글 목록 보여주기
  // }

  handleSubmit(e) {
      e.preventDefault()
      const username = e.target.elements.username.value
      const password = e.target.elements.password.value
      this.props.login(username, password)
  }

  render() {
    const { onRegister } = this.props;
    return (
          <React.Fragment>
            <form onSubmit={e => this.handleSubmit(e)}>
              <h1>로그인</h1>
              <input ref={this.usernameRef} type="text" name="username" />
              <input ref={this.passwordRef} type="text" name="password" />
              <button>로그인</button>
            </form>
            <button onClick={() => onRegister()}>회원 가입</button>
          </React.Fragment>
    );
  }
}
// prop으로 넘겨주면, 로그인함수를 어디서나 사용할 수 있습니다
// 원래는 onSubmit안에서만 사용 가능했었음
export default withUser(LoginForm)
