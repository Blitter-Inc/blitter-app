import { ViewProps } from "react-native";


export interface ContainerStyleProps {
  height: number | string;
  width: number | string;
};

export interface CenteredFlexContainerStyleProps {
  justifyContent: "center";
  alignItems: "center";
};

export type ContainerPropsType = ContainerStyleProps | CenteredFlexContainerStyleProps;

export type ContainerProps = ContainerPropsType | ContainerPropsType[];

export interface PositionProps {
  position: "absolute" | "relative";
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
};

export interface ActionBarContainerStyleProps extends ContainerStyleProps {
  flexDirection: "row" | "column" | "row-reverse" | "column-reverse";
};

export interface StyleProps {
  ActionBarContainer: ActionBarContainerStyleProps;
  ListContainer: ContainerStyleProps;
  FlexCenteredContainer: CenteredFlexContainerStyleProps;
  ExpandedContainer: ContainerStyleProps;
  FloatingIcon: PositionProps;
  ContentContainer: ViewProps;
};
