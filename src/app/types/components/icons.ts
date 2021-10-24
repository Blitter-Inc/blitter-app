import { ViewStyle } from "react-native";


export interface IconComponentProps {
  color: string;
  size?: number;
  styles?: ViewStyle | ViewStyle[];
  onPress?: () => void;
};

export type IconComponent = (props: IconComponentProps) => JSX.Element;
