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

export interface ActionBarContainerStyleProps extends ContainerStyleProps {
  flexDirection: "row" | "column" | "row-reverse" | "column-reverse";
};

export interface StyleProps {
  ActionBarContainer: ActionBarContainerStyleProps;
  ListContainer: ContainerStyleProps;
  FlexCenteredContainer: CenteredFlexContainerStyleProps;
  ExpandedContainer: ContainerStyleProps;
};
