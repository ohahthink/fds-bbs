import React, { Component } from 'react';
import api from '../api';
import { Form } from 'semantic-ui-react';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 현재 입력 필드에 입력된 사용자 이름/암호
      username: '',
      password: '',
    };
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    // const username = e.target.elements.username.value
    // const password = e.target.elements.password.value
    // 사용자 이름 중복체크
    const { data: users } = await api.get('/users', {
      // params에 뭔가 넣어주면, 쿼리스트링으로 날아갑니다
      params: {
        username,
      },
    });
    if (users.length > 0) {
      alert('이미 같은 이름이 사용 중입니다.');
      return;
    }
    // api설정 해줘야 합니다
    const res = await api.post('/users/register', {
      username,
      password,
    });
    localStorage.setItem('token', res.data.token);
    // TODO: 게시글 목록 보여주기
  }

  // handleUsernameChange(e) {
  //     this.setState({
  //         username: e.target.value
  //     })
  // }

  // handlepasswordChange(e) {
  //     this.setState({
  //         password: e.target.value
  //     })
  // }

  handleFieldChange(e, name) {
    // name 변수에 저장되어 있는 문자열을
    // 그대로 속성 이름으로 사용하기
    this.setState({
      [name]: e.target.value,
    });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        {/* 이벤트 객체 내용이 필요할 때는 e를 넘겨주고, 필요하지 않을때는 ()넘겨주지 않아도 됩니다, 현재는 e.preventDefault()가 e를 필요로 하기 때문에 넘겨줍니다 */}
        <Form onSubmit={e => this.handleSubmit(e)}>
          <h1>회원가입</h1>
          {/* value를 넣어주면 제어되는 컴포넌트가 됩니다, 상태를 리액트 컴포넌트 안에 저장하고 그 상태를 리액트 컴포넌트 안에서 바꿔줘야 합니다*/}
          <Form.Input
            label="아이디"
            type="text"
            name="username"
            value={username}
            onChange={e => this.handleFieldChange(e, 'username')}
          />
          <Form.Input
            label="비밀번호"
            type="password"
            name="password"
            value={password}
            onChange={e => this.handleFieldChange(e, 'password')}
          />
          <Form.Button>가입</Form.Button>
        </Form>
      </div>
    );
  }
}
