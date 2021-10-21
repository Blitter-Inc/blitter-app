import { ReactNode, ReactNodeArray } from "react";
import { TextProps } from "react-native-elements";
import { PickerItemProps, PickerProps } from "@react-native-picker/picker";
import { FlexStyle, ViewProps } from "react-native";


export interface ContainerizedComponentProps {
  containerStyle?: ViewProps | FlexStyle;
};

export interface PickerComponentProps extends PickerProps {
  label: string;
  children: ReactNode | ReactNodeArray;
};

export interface InputLabelComponentProps extends TextProps {
  children: ReactNode;
};

export interface BadgePickerComponentProps extends PickerProps, ContainerizedComponentProps {
  children: ReactNode | ReactNodeArray;
};

export type PickerComponent = (props: PickerComponentProps) => JSX.Element;
export type PickerItemComponent = (props: PickerItemProps) => JSX.Element;
export type InputLabelComponent = (props: InputLabelComponentProps) => JSX.Element;
export type BadgePickerComponent = (props: BadgePickerComponentProps) => JSX.Element;
