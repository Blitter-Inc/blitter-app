import React from "react";
import { ViewStyle } from "react-native";
import { Icon } from "react-native-elements";


interface IconProps {
  color: string;
  styles?: ViewStyle | ViewStyle[];
  onPress?: () => void;
};

type Icon = (props: IconProps) => JSX.Element;

export const FloatAddIcon: Icon = ({ color, styles, onPress }) => (
  <Icon type="material" name="add-box" color={color} size={70} onPress={onPress} containerStyle={styles} />
);

export const FormInputNameIcon: Icon = ({ color }) => (
  <Icon type="font-awesome" name="user" color={color} size={25} />
);

export const FormInputEmailIcon: Icon = ({ color }) => (
  <Icon type="font-awesome" name="envelope" color={color} size={20} />
);

export const FormInputBioIcon: Icon = ({ color }) => (
  <Icon type="font-awesome" name="info-circle" color={color} size={20} />
);

export const HeaderSearchIcon: Icon = ({ color, onPress }) => (
  <Icon type="font-awesome" name="search" color={color} size={20} containerStyle={{
    marginRight: 15,
  }} onPress={onPress} />
);

export const NotFoundIcon: Icon = ({ color }) => (
  <Icon type="material" name="foundation" color={color} size={80} style={{ padding: 8 }} />
);

export const RupeeIcon: Icon = ({ color }) => (
  <Icon type="font-awesome" name="rupee" color={color} size={20} style={{ padding: 4, paddingTop: 8, }} />
);
