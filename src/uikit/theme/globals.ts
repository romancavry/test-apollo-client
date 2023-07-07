import { css } from '@linaria/core';

export default css`
  :global() {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
      box-shadow: none;
    }

    *:focus {
      outline: none;
    }

    body {
      margin: 0;
      height: 100%;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    a {
      text-decoration: none;
    }
  }
`;
