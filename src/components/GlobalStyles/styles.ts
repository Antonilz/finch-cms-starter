import { createGlobalStyle } from 'styled-components';

export const CommonStyles = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
    scroll-behavior: smooth; 
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }

  body {
    position: relative;
    margin: 0;
    min-width: 320px;
    width: 100%;
    height: 100%;
  }

  /* Remove inner shadow of input in Safari */
  input:not([type='checkbox']):not([type='radio']) {
    -webkit-appearance: none;
  }

  /* Remove input auto zoom in iOS */
  @media screen and (min-device-pixel-ratio: 0) {
    select,
    textarea,
    input {
      font-size: 16px !important;
    }
    input:focus {
      font-size: 16px !important;
    }
  }
`;

export const SlickStyles = createGlobalStyle`
  .slick-track {
    padding: 2px 0;
  }

  .slick-loading .slick-slide,
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slider {
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .slick-list:focus {
    outline: 0;
  }

  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-list,
  .slick-slider .slick-track {
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    top: 0;
    left: 0;
  }

  .slick-track:after,
  .slick-track:before {
    display: table;
    content: '';
  }

  .slick-track:after {
    clear: both;
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
    outline: 0;
  }

  [dir=rtl] .slick-slide {
    float: right;
  }

  .slick-slide img {
    display: block;
  }

  .slick-slide.slick-loading img {
    display: none;
  }

  .slick-slide.dragging img {
    pointer-events: none;
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }
`;
