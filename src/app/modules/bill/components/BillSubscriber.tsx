import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Text } from "react-native-elements";
import { AmountInput, CheckMarkIcon } from "$components/index";
import { useAppTheme } from "$config/theme";
import { BillSubscriberComponent } from "$types/modules/bill";


const BillSubscriber: BillSubscriberComponent = props => {
  /*
    - View subscriber `avatar` and `name`.
    - Non-Edit mode:
      - View subscriber settlement summary.
      - Has a `Pay` button if logged in user included in bill subscriber.
      - Has a fulfilled badge if split amount settled for any subscriber.
    - Edit mode:
      - Has a `amount input` text field used to mention the split amount.
  */

  const ColorPalette = useAppTheme();

  return (
    <View style={[styles.container, { backgroundColor: ColorPalette.FONT.PLACEHOLDER }]}>
      <View style={styles.subcontainer}>
        <Avatar title={props.name?.[0]} size={45} source={{ uri: props.avatar }} />
        <View style={{ marginLeft: 5 }}>
          <Text style={[styles.text, { color: ColorPalette.ACCENT }]}> {props.name}</Text>
          {!props.editable && <Text style={[styles.subtext, { color: ColorPalette.SECONDARY }]}>Paid ₹ {props.fulfilled ? props.amount : `${props.amountPaid} / ${props.amount}`}</Text>}
        </View>
      </View>
      <View style={styles.subcontainer}>
        {
          props.editable ? (
            <AmountInput
              value={props.amount}
              placeholder="XXX"
              placeholderTextColor={ColorPalette.SECONDARY}
              size={16}
              containerStyle={styles.amountInputContainer}
              style={styles.amountInput}
            />
          ) : (
            props.fulfilled ? (
              <CheckMarkIcon color="red" size={30} />
            ) : props.self ? (
              <Button
                title={`Pay  ₹ ${parseFloat(props.amount) - parseFloat(props.amountPaid ?? "")} /-`}
                titleStyle={{ fontSize: 10 }}
                containerStyle={{ marginRight: 10 }}
              />
            ) : null
          )
        }
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
  },
  text: {
    fontSize: 15,
    marginBottom: 2,
  },
  subtext: {
    fontSize: 12,
    marginLeft: 4,
  },
  amountInputContainer: {
    borderWidth: 0,
    maxWidth: 100,
    paddingRight: 5,
  },
  amountInput: {
    marginLeft: 4,
    paddingRight: 10,
  },
});

export default BillSubscriber;
