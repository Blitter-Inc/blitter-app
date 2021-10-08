import React from "react";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


interface IconProps {
  color: string;
  onPress?: () => void;
};

type Icon = (props: IconProps) => JSX.Element;

export const AddFloatIcon: Icon = ({ color }) => (
  <MaterialIcons name="add-box" color={color} size={40} />
);

export const FormInputNameIcon: Icon = ({ color }) => (
  <FontAwesomeIcon name="user" color={color} size={25} />
);

export const FormInputEmailIcon: Icon = ({ color }) => (
  <FontAwesomeIcon name="envelope" color={color} size={20} />
);

export const FormInputBioIcon: Icon = ({ color }) => (
  <FontAwesomeIcon name="info-circle" color={color} size={20} />
);

export const HeaderSearchIcon: Icon = ({ color, onPress }) => (
  <FontAwesomeIcon name="search" color={color} size={22} style={{
    paddingHorizontal: 15,
  }} onPress={onPress} />
);

export const NotFoundIcon: Icon = ({ color }) => (
  <MaterialIcons name="foundation" color={color} size={80} style={{ padding: 8 }} />
);
