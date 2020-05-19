import React from 'react';
import { Link } from 'gatsby';

import * as S from './styled';

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <S.SiteHeader>
        <S.SiteTitle>
          <Link to="/">Home</Link>
        </S.SiteTitle>
        <nav>Navigation</nav>
      </S.SiteHeader>
      {/* Elemento passado no index */}
      {children}
      <footer>Footer</footer>
    </S.LayoutWrapper>
  );
};

export default Layout;
