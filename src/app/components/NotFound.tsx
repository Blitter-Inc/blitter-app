import React from "react";
import { ContainerProps } from "$types/config/theme";
import { NotFoundIcon } from "./Icons";
import Text from "./defaults/Text";
import View from "./defaults/View";


interface NotFoundProps {
  entity: string;
  iconColor: string;
  styles: ContainerProps;
}

const NotFound = ({ entity, styles, iconColor }: NotFoundProps) => (
  <View style={styles}>
    <NotFoundIcon color={iconColor} size={80} style={{ padding: 8 }} />
    <Text>No {entity} found.</Text>
  </View>
);


export default NotFound;
