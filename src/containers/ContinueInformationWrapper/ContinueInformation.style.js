import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const ContinueInformationWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  background-color: ${themeGet("colors.white", "#ffffff")};
  @media only screen and (min-width: 1201px) {
    max-width: 1170px;
    width: 100%;
  }
  @media only screen and (max-width: 667px) {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
