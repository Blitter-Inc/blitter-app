import { IconProps } from "react-native-elements";


export interface IconComponentProps extends Omit<IconProps, "type" | "name"> { };

export type IconComponent = (props: IconComponentProps) => JSX.Element;
