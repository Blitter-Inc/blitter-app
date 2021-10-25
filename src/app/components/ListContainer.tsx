import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ListContainerComponent } from "$types/components";


const ListContainer: ListContainerComponent = ({ children, ...scrollViewProps }) => {
  return (
    <ScrollView {...scrollViewProps} style={[styles.list, scrollViewProps.style]}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 15,
  },
});


export default ListContainer;
