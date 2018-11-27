import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import PostForm from './PostForm'

storiesOf('PostForm', module)
    .add('default', () => <PostForm />)
    .add('editing', () => <PostForm editing={true} />)
