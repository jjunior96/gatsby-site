import React from 'react';

// import { FaGithub as Github, FaLinkedinIn as Linkedin } from 'react-icons/fa';
import {
  Github,
  LinkedinSquare as Linkedin,
} from 'styled-icons/boxicons-logos';

import links from './content';
// import Icons from './Icons';

import * as S from './styled';

const Icons = [Github, Linkedin];

const SocialLinks = () => (
  <S.SocialLinksWrapper>
    <S.SocialLinksList>
      {links.map((link, i) => {
        const Icon = Icons[i];

        return (
          <S.SocialLinksItem key={Math.random()}>
            <S.SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        );
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
);

export default SocialLinks;
