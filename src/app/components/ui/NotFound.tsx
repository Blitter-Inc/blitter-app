import React from "react";
import { useTheme } from "react-native-elements";
import { ContainerProps } from "@d/theme/styles";
import { Text, View } from "./defaults";
import { NotFoundIcon } from "./Icons";


interface NotFoundProps {
  entity: string;
  styles: ContainerProps;
}

const NotFound = ({ entity, styles }: NotFoundProps) => {

  const { theme: { ColorPalette } } = useTheme();

  return (
    <View style={styles}>
      <NotFoundIcon color={ColorPalette.ACCENT} />
      <Text>No {entity} found.</Text>
    </View>
  );
}


export default NotFound;
