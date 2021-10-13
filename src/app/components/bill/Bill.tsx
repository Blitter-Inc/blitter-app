import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button, Input, Overlay, Text } from "react-native-elements";
import { Picker, PickerItem, View } from "@components/ui";
import { BillComponent, BillModel } from "@d/components";


const Bill: BillComponent = ({ isNew, overlayProps }) => {
  const initialBill: BillModel = {
    name: "",
    amount: "",
    type: "",
    eventName: "",
    description: "",
    status: "PENDING",
    created: new Date().toDateString(),
    lastUpdated: new Date().toDateString(),
    subscribers: [],
    attachments: [],
  };

  const [bill, setBill] = useState<BillModel>(initialBill);

  const updateBill = (billInput: Partial<BillModel>) => {
    setBill({ ...bill, ...billInput });
  };

  const closeOverlay = () => {
    overlayProps.onBackdropPress();
    setBill(initialBill);
  };

  return (
    <Overlay {...overlayProps} overlayStyle={styles.overlay} onBackdropPress={closeOverlay}>
      <View style={{ height: "100%", width: "100%" }}>
        <Text h2 style={styles.title}>Add Bill</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.form}>
          <Input label="Name" value={bill.name} placeholder="Enter bill name" onChangeText={name => updateBill({ name })} />
          <Picker label="Type" selectedValue={bill.type} onValueChange={(type: string) => updateBill({ type })}>
            <PickerItem label="Food" value="FOOD" />
            <PickerItem label="Shopping" value="SHOPPING" />
            <PickerItem label="Miscelleneous" value="MISC" />
          </Picker>
          <Input label="Amount" value={bill.amount} placeholder="Enter bill amount" onChangeText={amount => updateBill({ amount })} keyboardType="numeric" />
          <Input
            label="Description"
            value={bill.description}
            placeholder="Provide description"
            onChangeText={description => updateBill({ description })}
            multiline
          />
          {
            !isNew && (
              <>
                <Input label="Status" value={bill.status} onChangeText={status => updateBill({ status })} disabled />
                <Input label="Created" value={bill.created} onChangeText={created => updateBill({ created })} disabled />
                <Input label="Last Updated" value={bill.lastUpdated} onChangeText={lastUpdated => updateBill({ lastUpdated })} disabled />
              </>
            )
          }
        </ScrollView>
        <Button title="Add" />
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlay: {
    width: "85%",
    padding: 20,
  },
  title: {
    padding: 8,
  },
  form: {
    paddingTop: 15,
    paddingBottom: 8,
    width: "100%",
  }
});


export default Bill;
