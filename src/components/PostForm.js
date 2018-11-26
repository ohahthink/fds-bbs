import React, { Component } from "react";
import s from './PostForm.module.scss'

// defaultValue에 다른 값을 또 넣어주지 않도록 주의!
export default class PostForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={e => this.props.onSubmit(e)}>
          <input className={s['titleInput']} type="text" name="title" defaultValue={this.props.title}/>
          <textarea name="body" cols="30" rows="10" defaultValue={this.props.body}/>
          <button>전송</button>
        </form>
      </div>
    )
  }
}
