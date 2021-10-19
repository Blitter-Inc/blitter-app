import React, { FC } from "react";
import { StyleSheet } from "react-native";
import View from "./defaults/View";
import { CenteredFlexContainerStyleProps, ContainerStyleProps } from "$types/config/theme/styles";


interface ListContainerProps {
  styles: (CenteredFlexContainerStyleProps | ContainerStyleProps)[];
};

const ListContainer: FC<ListContainerProps> = ({ children, styles: propStyles }) => {
  return (
    <View style={propStyles}>
      <View style={styles.list}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 25,
    marginHorizontal: 15,
    // borderWidth: 2,
    // borderRadius: 35,
  },
});


export default ListContainer;
