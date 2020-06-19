import React from 'react';

import PostItem from '../PostItem';
import * as S from './styled';

const PostWrapper = () => (
  <S.PostItemWrapper>
    {/* <PostItem
      slug="/about/"
      category="category"
      date="12121221"
      timeToRead="{timeToRead}"
      title="{title}"
      description="{description}"
      background="{background}"
    /> */}
    <PostItem />
    <PostItem />
    <PostItem />
  </S.PostItemWrapper>
);

export default PostWrapper;
