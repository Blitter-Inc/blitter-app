import React, { useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Overlay } from "react-native-elements";
import { ActionBarContext } from "$config/context";
import { useAppTheme } from "$config/theme";
import { ActionBarComponent } from "$types/components";
import { FilterIcon, SortAscendingIcon } from "./Icons";
import FilterModal from "./FilterModal";
import Pill from "./Pill";


const ActionBar: ActionBarComponent = ({
  containerStyle,
  addBtnHandler,
}) => {
  const ColorPalette = useAppTheme();
  const { sort: { reverseOrderingEnabled, toggleOrdering } } = useContext(ActionBarContext);

  const [showFilterModal, setShowFilterModal] = useState(false);
  const hideFilterModal = () => setShowFilterModal(false);

  return (
    <>
      <View style={[styles.container, { borderColor: ColorPalette.ACCENT }, containerStyle]}>
        <View style={{ flexDirection: "row", justifyContent: "flex-start", flex: 1 }}>
          <Pill
            outlined
            size={16}
            containerStyle={styles.pill}
            label="Filter"
            RightIcon={FilterIcon}
            onPress={() => {
              setShowFilterModal(true);
            }}
          />
          <Pill
            outlined
            size={16}
            containerStyle={styles.pill}
            label={`${reverseOrderingEnabled ? "Oldest" : "Latest"} First`}
            RightIcon={SortAscendingIcon}
            onPress={toggleOrdering}
          />
        </View>
        <TouchableOpacity style={styles.addBtn} onPress={addBtnHandler}>
          <Text style={styles.text}>Add +</Text>
        </TouchableOpacity>
      </View>
      <Overlay isVisible={showFilterModal} onBackdropPress={hideFilterModal} overlayStyle={{
        width: "90%",
        padding: 15,
      }}>
        <FilterModal hideOverlayHandler={hideFilterModal} />
      </Overlay>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: 2,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  pill: {
    alignItems: "center",
    height: 28,
    margin: 0,
    paddingVertical: 0,
    paddingLeft: 12,
    paddingRight: 8,
    marginRight: 8,
  },
  text: {
    paddingHorizontal: 5,
    color: "red",
    fontWeight: "bold",
    fontSize: 15,
  },
  addBtn: { height: "100%", justifyContent: "center", paddingTop: 10 },
});


export default ActionBar;
