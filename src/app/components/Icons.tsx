import React from "react";
import { Icon } from "react-native-elements";
import { IconComponent } from "$types/components";


export const AddIcon: IconComponent = ({ color, size, styles }) => (
  <Icon type="material" name="add" color={color} size={size} containerStyle={styles} />
);

export const AddSquareIcon: IconComponent = ({ color, size, styles }) => (
  <Icon type="material" name="add-box" color={color} size={size} containerStyle={styles} />
);

export const FloatAddIcon: IconComponent = ({ color, styles, onPress }) => (
  <Icon type="material" name="add-box" color={color} size={70} onPress={onPress} containerStyle={styles} />
);

export const FormInputNameIcon: IconComponent = ({ color }) => (
  <Icon type="font-awesome" name="user" color={color} size={25} />
);

export const FormInputEmailIcon: IconComponent = ({ color }) => (
  <Icon type="font-awesome" name="envelope" color={color} size={20} />
);

export const FormInputBioIcon: IconComponent = ({ color }) => (
  <Icon type="font-awesome" name="info-circle" color={color} size={20} />
);

export const HeaderSearchIcon: IconComponent = ({ color, onPress }) => (
  <Icon type="font-awesome" name="search" color={color} size={20} containerStyle={{
    marginRight: 15,
  }} onPress={onPress} />
);

export const NotFoundIcon: IconComponent = ({ color }) => (
  <Icon type="material" name="foundation" color={color} size={80} style={{ padding: 8 }} />
);

export const RupeeIcon: IconComponent = ({ color, size, styles }) => (
  <Icon type="font-awesome" name="rupee" color={color} size={size} containerStyle={styles} />
);
