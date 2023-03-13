import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 400px;

  // 점 커스텀 부분
  .dots_custom {
    display: inline-block;
    vertical-align: middle;
    margin: auto 0;
    padding: 0;
  }

  .dots_custom li {
    list-style: none;
    cursor: pointer;
    display: inline-block;
    margin: 0 6px;
    padding: 0;
  }

  .dots_custom li button {
    border: none;
    background: #d1d1d1;
    color: transparent;
    cursor: pointer;
    display: block;
    height: 8px;
    width: 8px;
    border-radius: 100%;
    padding: 0;
  }

  .dots_custom li.slick-active button {
    background-color: #08c1ce;
  }
`;

export const BannerImage = styled.img`
  background-color: pink;
  height: 350px;
  // width: 100%;
  height: 100%;
  // background-size: cover;
  // background-position: center;
`;

// export const Pre = styled.div`
//   width: 30px;
//   height: 30px;
//   position: absolute;
//   left: 3%;
//   z-index: 3;
// `;

// export const NextTo = styled.div`
//   width: 30px;
//   height: 30px;
//   position: absolute;
//   right: 3%;
//   z-index: 3;
// `;
