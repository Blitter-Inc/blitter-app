import React from "react";
import { ContainerProps } from "@d/theme/styles";
import { Text, View } from "./defaults";
import { NotFoundIcon } from "./Icons";


interface NotFoundProps {
  entity: string;
  iconColor: string;
  styles: ContainerProps;
}

const NotFound = ({ entity, styles, iconColor }: NotFoundProps) => (
  <View style={styles}>
    <NotFoundIcon color={iconColor} />
    <Text>No {entity} found.</Text>
  </View>
);


export default NotFound;
