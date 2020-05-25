import React from 'react';

import * as S from './styled';

const PostItem = () => (
  <S.PostItemWrapper>
    <S.PostItemCard>
      <S.PostItemLink>
        <S.PostIemTag>TAG</S.PostIemTag>
      </S.PostItemLink>
      <S.PostItemLink>
        <S.PostItemInfo>
          <S.PostiItemTitle>Titulo</S.PostiItemTitle>
          <S.PostItemDate>25 de Maio de 2020</S.PostItemDate>
        </S.PostItemInfo>
      </S.PostItemLink>
    </S.PostItemCard>

    <S.PostItemCard>
      <S.PostItemLink>
        <S.PostIemTag>TAG</S.PostIemTag>
      </S.PostItemLink>
      <S.PostItemLink>
        <S.PostItemInfo>
          <S.PostiItemTitle>Titulo</S.PostiItemTitle>
          <S.PostItemDate>25 de Maio de 2020</S.PostItemDate>
        </S.PostItemInfo>
      </S.PostItemLink>
    </S.PostItemCard>

    <S.PostItemCard>
      <S.PostItemLink>
        <S.PostIemTag>TAG</S.PostIemTag>
      </S.PostItemLink>
      <S.PostItemLink>
        <S.PostItemInfo>
          <S.PostiItemTitle>Titulo</S.PostiItemTitle>
          <S.PostItemDate>25 de Maio de 2020</S.PostItemDate>
        </S.PostItemInfo>
      </S.PostItemLink>
    </S.PostItemCard>
  </S.PostItemWrapper>
);

export default PostItem;
