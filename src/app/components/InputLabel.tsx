import React from "react";
import { Text } from "react-native-elements"
import { InputLabelComponent } from "$types/components";


const InputLabelComponent: InputLabelComponent = ({ children, ...textProps }) => (
  <Text {...textProps} >{children}</Text>
);
