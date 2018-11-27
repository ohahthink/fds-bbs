import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
// LinkTO는 action이랑 비슷합니다
// 함수를 반환하는 함수인데 그 반환된 함수가 호출됐을 때
// 스토리북의 다른 페이지로 넘어가게 만들 수 있습니다 

import { Button, Welcome } from '@storybook/react/demo';
import PostForm from './PostForm'

const actions = {
    onSubmit: action('onSubmit')
}

storiesOf('PostForm', module)
    .add('default', () => <PostForm {...actions} />)
    .add('editing', () => <PostForm {...actions} editing={true} />)

