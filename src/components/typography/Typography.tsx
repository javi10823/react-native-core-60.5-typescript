import React from "react";

import { StyledText } from "./styles";
import { theme } from "../../utils/Colors";

export enum TypographyVariant {
  Regular = "nunito-regular",
  Bold = "nunito-bold",
  ExtraBold = "nunito-extraBold",
  Light = "nunito-light"
}

export interface TypographyProps {
  color: keyof typeof theme.text;
  variant: TypographyVariant;
  children?: React.ReactNode;
  textAlign?: "left" | "right" | "center";
  ellipsizeMode?: "head" | "middle" | "tail" | "clip";
  size: number;
  numberOfLines: number;
}

const Typography = ({ children, ...props }: TypographyProps) =>
  !children ? null : <StyledText {...props}>{children}</StyledText>;

Typography.defaultProps = {
  TypographyVariant: "regular",
  color: "primary",
  textAlign: "left",
  style: null,
  ellipsizeMode: "tail",
  children: null,
  size: 12
};

export default Typography;
