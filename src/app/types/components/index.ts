import { ReactNode } from "react";
import { TextInputProps } from "react-native";
import { TextProps } from "react-native-elements";
import { PickerItemProps, PickerProps } from "@react-native-picker/picker";
import { ActionProps, ChildrenProps, ContainerProps } from "./abstracts";
import { AppThemeHookProps } from "../config/theme";


export interface AmountInputProps extends TextInputProps, AppThemeHookProps, ContainerProps { };
export interface BadgePickerComponentProps extends PickerProps, ContainerProps, ChildrenProps { };
export interface DescriptionInputProps extends TextInputProps, AppThemeHookProps, ContainerProps { };
export interface FileGalleryProps { };
export interface InputLabelComponentProps extends TextProps, ChildrenProps { };
export interface LabeledBoxContainerProps extends ChildrenProps { label: string; };
export interface PickerComponentProps extends PickerProps, ChildrenProps { label: string; };
export interface PillComponentProps extends ActionProps, ContainerProps {
  label: string;
  size: number;
  icon: ReactNode;
};

export type BadgePickerComponent = (props: BadgePickerComponentProps) => JSX.Element;
export type FileGallaryComponent = (props: FileGalleryProps) => JSX.Element;
export type InputLabelComponent = (props: InputLabelComponentProps) => JSX.Element;
export type LabeledBoxContainerComponent = (props: LabeledBoxContainerProps) => JSX.Element;
export type PickerComponent = (props: PickerComponentProps) => JSX.Element;
export type PickerItemComponent = (props: PickerItemProps) => JSX.Element;
export type PillComponent = (props: PillComponentProps) => JSX.Element;

export * from "./icons";
