/* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
*/

// Primary
// colors: #132F40, #51868C, #F2EDD0, #F27D52, #BF6C5A

// colors: #6C748C, #273440, #F2F2EB, #BF8360, #8C5A4F
// color: #3A3E40, #F0F1F2, #BFB093, #8C7B6C, #A6756A

// color: #67618C
// color: #89888C
// color: #F0F0F2
// color: #59554D
// color: #26211F

// color: #E1E6FA
// color: #C4D7ED
// color: #ABC8E2
// color: #375D81
// color: #183152

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html {
    /* Para utilizar o .REM mais facilmente */
    /* font-size: 62.5% */
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    /* background: #F2EDD0; */
    /* border-top: 10px solid #F27D52; */
    line-height: 1;
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  /* body.dark {
    --borders: #38444d;
    --texts: #8899a6;
    --postColor: #fff;
    --hightlight: #1fa1f2;
    --mediumBackground: #192734;
    --background: #16202c;
    --white: #fff;
    --black: #222;
  }
  body.light {
    --borders: #dedede;
    --texts: #555555;
    --postColor: #111;
    --hightlight: #1fa1f2;
    --mediumBackground: #f0f0f3;
    --background: #fff;
    --white: #fff;
    --black: #222;
  } */
`;

export default GlobalStyles;
