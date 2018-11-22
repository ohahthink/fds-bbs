import React, { Component } from 'react'

// provider기본값 생략된 코드
const {Provider, Consumer} = React.createContext()

export default class UserProvider extends Component {
  render() {
    return (
      <Provider value={{username: 'fast'}}>{this.props.children}</Provider>
    )
  }
}

//named export 여러개 동시에 하고 싶을 때 
export {
    UserProvider,
    Consumer as UserConsumer
}
