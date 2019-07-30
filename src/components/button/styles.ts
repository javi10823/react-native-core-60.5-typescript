import { TextProps, TouchableOpacityProps } from "react-native";
import styled, { css } from "styled-components/native";
import { responsiveSize } from "../../utils/dimensions";
import { Type, Size } from "./Button";

type TitleProps = {
  type: Type;
} & TextProps;

type ButtonTouchableProps = {
  type: Type;
  disabled: boolean;
  size: Size;
} & TouchableOpacityProps;

const getTypeStyle = (type: Type, disabled: boolean) =>
  ({
    primary: css`
      background-color: ${p =>
        disabled ? p.theme.global.inactive : p.theme.global.lightBlue};
      /* you can pass other type specific styles here */
    `,
    secondary: css`
      background-color: transparent;
      /* you can pass other type specific styles here */
    `
  }[type]);

const getSizeStyle = (size: Size) =>
  ({
    small: css`
      min-width: 35%;
    `,
    medium: css`
      min-width: 60%;
    `,
    big: css`
      min-width: 85%;
    `,
    auto: css`
      /* fits to text width */
    `
  }[size]);

function getTextStyle(type: Type) {
  return {
    primary: css`
      color: ${p => p.theme.global.white};
    `,
    secondary: css`
      color: ${p => p.theme.global.lightBlue};
    `
  }[type];
}

/* 
    We can consider moving responsiveSize utility to theme, name it as 'px' and use it as follows:
  
    height: ${props => props.theme.px(55)} 
    or even shorter
    height: ${p => p.theme.px(55)} 
  
    It will allow us to not import this util on every file.
    We can have quick access in theme property.
    responsiveSize is used only in styles so it's good to have it in styled-components theme
*/

export const ButtonTouchable = styled.TouchableOpacity<ButtonTouchableProps>`
  justify-content: center;
  padding: ${responsiveSize(5)}px;
  border-radius: ${responsiveSize(10)}px;
  height: ${responsiveSize(55)}px;

  ${props => getTypeStyle(props.type, props.disabled)};
  ${props => getSizeStyle(props.size)};
`;

export const Title = styled.Text<TitleProps>`
  text-align: center;
  font-size: 16px;

  ${props => getTextStyle(props.type)}
`;
