import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const PostItem = ({ slug, background, category, date, title }) => (
  <>
    <S.PostItemCard>
      <S.PostItemLink to={slug}>
        <S.PostIemTag background={background}>{category}</S.PostIemTag>
      </S.PostItemLink>
      <S.PostItemLink to="/">
        <S.PostItemInfo>
          <S.PostiItemTitle>{title}</S.PostiItemTitle>
          <S.PostItemDate>{date}</S.PostItemDate>
        </S.PostItemInfo>
      </S.PostItemLink>
    </S.PostItemCard>
  </>
);

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PostItem;
