import React, { Component } from 'react'
import api from '../api'

export default class RegisterForm extends Component {
  
    async handleSubmit(e) {
        e.preventDefault()
        const username = e.target.elements.username.value
        const password = e.target.elements.password.value
        // FIXME: 사용자 이름 중복체크 해야함
        const {data: users} = await api.get('/users', {
            // params에 뭔가 넣어주면, 쿼리스트링으로 날아갑니다
            params: {
                username
            }
        })
        if (users.length > 0) {
            alert('이미 같은 이름이 사용 중입니다.')
            return
        }
        // api설정 해줘야 합니다
        const res = await api.post('/users/register', {
            username,
            password
        })
        localStorage.setItem('token', res.data.token)
        // TODO: 게시글 목록 보여주기
    }
    render() {
    return (
      <div>
          {/* 이벤트 객체 내용이 필요할 때는 e를 넘겨주고, 필요하지 않을때는 ()넘겨주지 않아도 됩니다, 현재는 e.preventDefault()가 e를 필요로 하기 때문에 넘겨줍니다 */}
        <form onSubmit={e => this.handleSubmit(e)}>
            <h1>회원가입</h1>
            <input type="text" name="username" />
            <input type="password" name="password" />
            <button>가입</button>
        </form>
      </div>
    )
  }
}
