import { ReactNode } from "react";
import { ScrollViewProps, TextInputProps } from "react-native";
import { OverlayProps, SearchBarProps as RNESearchBarProps, TextProps } from "react-native-elements";
import { PickerItemProps, PickerProps } from "@react-native-picker/picker";
import { UserObject } from "$types/modules/auth";
import { ActionProps, ChildrenProps, ContainerProps } from "./abstracts";
import { AppThemeHookProps } from "../config/theme";
import { IconComponent } from "./icons";
import { ContactObjectMap } from "$types/store";


export interface AmountInputProps extends TextInputProps, AppThemeHookProps, ContainerProps {
  size: number;
};

export interface BadgePickerComponentProps extends PickerProps, ContainerProps { };

export interface ContactPickerComponentProps {
  overlayProps: OverlayProps;
  colors: {
    title: string;
    subtext: string;
    selectedItem: string;
  };
  contactMap: ContactObjectMap;
  selectedContacts?: {
    count: number;
    objectMap: { [id: string]: any };
    toggle: (contactId: number) => () => void;
  };
  chooseContactAction?: (contact: UserObject) => void;
  contactActionWidget?: ReactNode;
};

export interface ContactPickerItemComponentProps {
  contact: UserObject;
  selected?: boolean;
  colors?: {
    highlight: string;
  };
  onPress?: () => void;
};

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
  outlined?: boolean;
};

export interface SearchBarComponentProps {
  placeholder?: string;
  searchBarProps?: RNESearchBarProps;
};

export interface TitleInputProps extends TextInputProps, AppThemeHookProps, ContainerProps { };

export type BadgePickerComponent = (props: BadgePickerComponentProps) => JSX.Element;
export type ContactPickerComponent = (props: ContactPickerComponentProps) => JSX.Element;
export type ContactPickerItemComponent = (props: ContactPickerItemComponentProps) => JSX.Element;
export type FileGallaryComponent = (props: FileGalleryProps) => JSX.Element;
export type InputLabelComponent = (props: InputLabelComponentProps) => JSX.Element;
export type LabeledContainerComponent = (props: LabeledContainerProps) => JSX.Element;
export type ListContainerComponent = (props: ListContainerProps) => JSX.Element;
export type PickerComponent = (props: PickerComponentProps) => JSX.Element;
export type PickerItemComponent = (props: PickerItemProps) => JSX.Element;
export type PillComponent = (props: PillComponentProps) => JSX.Element;
export type SearchBarComponent = (props: SearchBarComponentProps) => JSX.Element;
export type SearchIconComponent = () => JSX.Element;

export * from "./icons";
