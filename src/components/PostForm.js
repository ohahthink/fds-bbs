import React, { Component } from 'react';
import s from './PostForm.module.scss';
import classNames from 'classnames';
// 이름 아무거나 사용해도 됩니다, cn이라고 사용하는 경우도 있습니다
import { Form } from 'semantic-ui-react';

// defaultValue에 다른 값을 또 넣어주지 않도록 주의!
export default class PostForm extends Component {
  static defaultprops = {
    // true가 주어지면, 편집 모드 스타일이 적용됨
    editing: false,
    // 폼 전송 시 호출되는 함수, title과 body를 인수로 받음
    onSubmit: () => {},
  };
  render() {
    const { editing } = this.props;
    const titleClass = classNames(s.titleInput, {
      // 객체 리터럴에서 속성이름부분에 대괄호를 썼을때는
      // 대괄호안의 표현식의 결과값이 곧 속성이름이 된다
      // 스타일을 동적으로...
      [s.editing]: editing,
    });
    return (
      <div>
        <Form
          onSubmit={e => {
            e.preventDefault();
            const title = e.target.elements.title.value;
            const body = e.target.elements.body.value;
            this.props.onSubmit(title, body);
          }}
        >
          <Form.Input
            className={titleClass}
            type="text"
            name="title"
            defaultValue={this.props.title}
          />
          <Form.TextArea
            name="body"
            cols="30"
            rows="10"
            defaultValue={this.props.body}
          />
          <Form.Button>전송</Form.Button>
        </Form>
      </div>
    );
  }
}
