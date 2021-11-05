import { ScrollViewProps, TextInputProps } from "react-native";
import { TextProps } from "react-native-elements";
import { PickerItemProps, PickerProps } from "@react-native-picker/picker";
import { ActionProps, ChildrenProps, ContainerProps } from "./abstracts";
import { AppThemeHookProps } from "../config/theme";
import { IconComponent } from "./icons";


export interface AmountInputProps extends TextInputProps, AppThemeHookProps, ContainerProps { };
export interface BadgePickerComponentProps extends PickerProps, ContainerProps { };
export interface DescriptionInputProps extends TextInputProps, AppThemeHookProps, ContainerProps { };
export interface FileGalleryProps { };
export interface InputLabelComponentProps extends TextProps { };
export interface LabeledContainerProps extends ChildrenProps, ContainerProps {
  label: string;
  labelProps?: TextProps;
};
export interface ListContainerProps extends ScrollViewProps { };
export interface PickerComponentProps extends PickerProps { label: string; };
export interface PillComponentProps extends ActionProps, ContainerProps {
  label: string;
  size: number;
  LeftIcon?: IconComponent;
  RightIcon?: IconComponent;
};
export interface TitleInputProps extends TextInputProps, AppThemeHookProps, ContainerProps { };

export type BadgePickerComponent = (props: BadgePickerComponentProps) => JSX.Element;
export type FileGallaryComponent = (props: FileGalleryProps) => JSX.Element;
export type InputLabelComponent = (props: InputLabelComponentProps) => JSX.Element;
export type LabeledContainerComponent = (props: LabeledContainerProps) => JSX.Element;
export type ListContainerComponent = (props: ListContainerProps) => JSX.Element;
export type PickerComponent = (props: PickerComponentProps) => JSX.Element;
export type PickerItemComponent = (props: PickerItemProps) => JSX.Element;
export type PillComponent = (props: PillComponentProps) => JSX.Element;

export * from "./icons";
