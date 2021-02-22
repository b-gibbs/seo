import { css } from "bumbag";

const gpTheme = {
  global: {
    styles: {
      base: css`
        html {
          height: 100%;
          overflow: hidden;
          position: relative;
        }
        body {
          height: 100%;
          overflow: auto;
          position: relative;
          overscroll-behavior-y: none;
        }
        @font-face {
          font-family: "Raleway";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local(""), url("../fonts/raleway-v19-latin-regular.woff2") format("woff2"),
            /* Chrome 26+, Opera 23+, Firefox 39+ */ url("../fonts/raleway-v19-latin-regular.woff")
              format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }
        /* raleway-700 - latin */
        @font-face {
          font-family: "Raleway";
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: local(""), url("../fonts/raleway-v19-latin-700.woff2") format("woff2"),
            /* Chrome 26+, Opera 23+, Firefox 39+ */ url("../fonts/raleway-v19-latin-700.woff")
              format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }
      `
    }
  },
  TopNav: {
    Item: {
      variants: {
        navigationText: {
          styles: {
            base: {
              fontFamily: "Raleway, system-ui",
              fontVariant: "small-caps"
            },
            focus: {
              boxShadow: "inset 0 -2px 0 0"
              // boxShadow: "none"
            }
          }
        },
        rightNavText: {
          styles: {
            base: {
              fontSize: "16px",
              fontWeight: 200
            },
            focus: {
              boxShadow: "inset 0 -2px 0 0"
            }
          }
        }
      }
    }
  },
  SideNav: {
    Item: {
      variants: {
        navigationText: {
          styles: {
            base: {
              font: "Raleway, system-ui",
              fontSize: "20px",
              fontVariant: "small-caps",
              fontWeight: "bold"
            },
            focus: {
              boxShadow: "none"
            }
          }
        }
      }
    }
  },
  Tag: {
    styles: {
      base: {
        _hover: {
          cursor: "pointer",
          altitude: 400
        }
      }
    }
  },
  Link: {
    styles: {
      base: {
        _hover: {
          textDecoration: "none",
          color: "primary200"
        }
      }
    }
  }
};

export default gpTheme;
