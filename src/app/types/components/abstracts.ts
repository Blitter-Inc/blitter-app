import { ReactNode, ReactNodeArray } from "react";
import { FlexStyle, ViewProps, ViewStyle } from "react-native";


export interface ActionProps {
  onPress?: () => void;
};

export interface ChildrenProps {
  children?: ReactNode | ReactNodeArray;
};

export interface ContainerProps {
  containerStyle?: ViewProps | FlexStyle | ViewStyle;
};
