import { ReactNode, ReactNodeArray } from "react";
import { TextProps } from "react-native-elements";
import { PickerItemProps, PickerProps } from "@react-native-picker/picker";


export interface PickerComponentProps extends PickerProps {
  label: string;
  children: ReactNode | ReactNodeArray;
};

export interface InputLabelComponentProps extends TextProps {
  children: ReactNode;
};

export interface BadgePickerComponentProps extends PickerProps {
  children: ReactNode | ReactNodeArray;
};

export type PickerComponent = (props: PickerComponentProps) => JSX.Element;
export type PickerItemComponent = (props: PickerItemProps) => JSX.Element;
export type InputLabelComponent = (props: InputLabelComponentProps) => JSX.Element;
export type BadgePickerComponent = (props: BadgePickerComponentProps) => JSX.Element;
