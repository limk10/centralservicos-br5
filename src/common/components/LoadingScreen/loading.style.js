import styled from "styled-components";

export const LoadingWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 99999;
  background: rgba(71, 71, 71, 0.6);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: 1s all;
`;

export const LoadingContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
