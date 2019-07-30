import styled from "styled-components/native";

import Typography from "../../components/typography";
import { responsiveSize } from "../../utils/dimensions";
import { theme } from "../../utils/Colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.global.white};
  justify-content: center;
  align-items: center;
`;

export const WelcomeImage = styled.Image`
  width: ${responsiveSize(80)}px;
  height: ${responsiveSize(80)}px;
`;

export const Title = styled(Typography)`
  margin: ${responsiveSize(40)}px;
  text-align: center;
`;
