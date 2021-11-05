import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Avatar, Button } from "react-native-elements";
import { CheckMarkIcon } from "$components/Icons";
import { useAppTheme } from "$config/theme";
import { BillSubscriberComponent } from "$types/modules/bill";


const BillSubscriber: BillSubscriberComponent = props => {
  const ColorPalette = useAppTheme();

  return (
    <View style={[styles.container, { backgroundColor: ColorPalette.FONT.PLACEHOLDER }]}>
      <View style={styles.subcontainer}>
        <Avatar size={45} source={{ uri: props.avatar }} />
        <View style={{ marginLeft: 5 }}>
          <Text style={styles.text}> {props.name}</Text>
          <Text style={[styles.subtext, { color: ColorPalette.SECONDARY }]}>Paid ₹ {props.fulfilled ? props.amount : `${props.amountPaid} / ${props.amount}`}</Text>
        </View>
      </View>
      <View style={styles.subcontainer}>
        {props.fulfilled ? (
          <CheckMarkIcon color="red" size={30} />
        ) : props.self ? (
          <Button
            title={`Pay  ₹ ${parseFloat(props.amount) - parseFloat(props.amountPaid)} /-`}
            titleStyle={{ fontSize: 10 }}
          />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    padding: 8,
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subcontainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  text: {
    fontSize: 14,
    marginBottom: 2,
  },
  subtext: {
    fontSize: 11,
    fontWeight: "bold",
    marginLeft: 4,
  },
});

export default BillSubscriber;
