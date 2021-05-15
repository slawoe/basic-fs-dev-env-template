import React from "react";
import { Global, css } from "@emotion/core";
const GlobalCSS = () => {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        #root {
        }
        html {
        }
        body {
        }
        code {
        }
      `}
    />
  );
};
export default GlobalCSS;
