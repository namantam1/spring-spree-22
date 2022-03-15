import styled from "styled-components";

export const Container = styled.footer`
  bottom: 0;
  width: 100%;
  background: rgb(1, 1, 1);
  position: relative;
  color: #d9d9d9;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;

  a,
  a:link,
  a:visited,
  a:focus,
  a:hover,
  a:active {
    text-decoration: none;
    color: #d9d9d9;
  }

  .main-content {
    display: flex;
    /* padding: 20px 0 0; */
  }

  .main-content .box {
    flex-basis: 50%;
    padding: 20px;
  }

  /* Box styling */
  .box {
    h2 {
      font-size: 1.125rem;
      font-weight: 600;
    }

    /* Content with underline */
    .content-with-underline {
      margin: 20px 0 0 0;
      position: relative;
    }

    .content-with-underline:before {
      position: absolute;
      content: "";
      top: -10px;
      height: 2px;
      width: 100%;
      background: #1a1a1a;
    }

    .content-with-underline:after {
      position: absolute;
      content: "";
      height: 2px;
      width: 15%;
      background: #1b98d7;
      top: -10px;
    }

    /* Content without underline */
    .content {
      margin: 20px 0 0 0;
      position: relative;
    }

    .content:before {
      position: absolute;
      content: "";
      top: -10px;
      height: 2px;
      width: 100%;
    }

    .content:after {
      position: absolute;
      content: "";
      height: 2px;
      width: 15%;
      top: -10px;
    }
  }

  /* Lets Connect section */
  .right .content-with-underline {
    .social {
      margin: 20px 0 0 0;

      svg {
        font-size: 2.5rem;
        margin: 0 5px;
        padding: 10px;
        background: #2685d8;
        line-height: 40px;
        text-align: center;
        border-radius: 100px;
        transition: 0.3s;

        &:hover {
          background: #43abe7;
        }
      }
    }
  }

  .right .content-with-underline .phone {
    margin: 15px 0;
  }

  .right .content-with-underline .place .fas,
  .email .fas {
    margin-right: 2px;
  }

  /* Links section */
  .text {
    font-size: 1.0625rem;
    font-weight: 300;
  }

  .content-with-underline .text {
    text-decoration: none;
  }

  .content-with-underline .text a:hover {
    color: #1b98d7;
  }

  /* Logo section */
  .footer-logo {
    height: 100%;
    width: 50vw;
    max-width: 190px;
    display: block;
    margin: auto;
  }

  /* Credits section */
  .bottom {
    text-align: center;
    padding: 10px 0;
    border-top: 1px solid #343434;

    small {
      color: #747474;
      font-size: 0.8rem;
    }
  }

  @media screen and (min-width: 900px) {
    margin-top: 10px;
    border-top: 1px solid #343434;
  }

  /* Media queries */
  @media screen and (max-width: 900px) {
    position: relative;
    bottom: 0px;

    .main-content {
      flex-wrap: wrap;
      flex-direction: column;

      .box {
        margin: 5px 0;
        padding: 0 40px;
      }
    }

    .right .content-with-underline .social {
      margin: 0 auto;
      margin-top: 20px;
      width: fit-content;
    }
  }
`;
