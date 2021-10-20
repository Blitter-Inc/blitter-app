import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import { Picker, PickerItem, SafeAreaView } from "$components/index";
import { Styles } from "$config/theme";
import {
  BillObject,
  BillStatus,
  BillType,
  BillScreenElement,
} from "$types/modules/bill";


const initialBill: BillObject = {
  name: "",
  amount: "0",
  settledAmt: "0",
  type: BillType.MISC,
  eventName: "",
  description: "",
  status: BillStatus.PENDING,
  createdBy: "",
  createdAt: new Date().toDateString(),
  lastUpdatedAt: new Date().toDateString(),
  subscribers: [],
  attachments: [],
};

const BillScreen: BillScreenElement = ({ route }) => {
  const { billObj } = route.params;

  const [bill, setBill] = useState<BillObject>(billObj ?? initialBill);

  const updateBill = (billInput: Partial<BillObject>) => {
    setBill({ ...bill, ...billInput });
  };

  return (
    <SafeAreaView style={[Styles.ExpandedContainer]}>
      <Text h2 style={styles.title}>{billObj ? "Edit" : "Add"} Bill</Text>
      <ScrollView style={styles.form}>
        <Input
          label="Name"
          value={bill.name}
          placeholder="Enter bill name"
          onChangeText={name => updateBill({ name })}
        />
        <Picker label="Type" selectedValue={bill.type} onValueChange={(type: BillType) => updateBill({ type })}>
          <PickerItem label="Food" value={BillType.FOOD} />
          <PickerItem label="Shopping" value={BillType.SHOPPING} />
          <PickerItem label="Miscelleneous" value={BillType.MISC} />
        </Picker>
        <Input
          label="Amount"
          value={bill.amount}
          placeholder="Enter bill amount"
          onChangeText={amount => updateBill({ amount })}
          keyboardType="numeric"
          textContentType="telephoneNumber"
        />
        <Input
          label="Description"
          value={bill.description}
          placeholder="Provide description"
          onChangeText={description => updateBill({ description })}
          multiline
        />
        {
          billObj && (
            <>
              <Input label="Status" value={bill.status} onChangeText={(status: BillStatus) => updateBill({ status })} disabled />
              <Input label="Created at" value={bill.createdAt} onChangeText={createdAt => updateBill({ createdAt })} disabled />
              <Input
                label="Last Updated"
                value={bill.lastUpdatedAt}
                onChangeText={lastUpdatedAt => updateBill({ lastUpdatedAt })}
                disabled
              />
            </>
          )
        }
      </ScrollView>
      <Button title="Add" />
    </SafeAreaView>
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


export default BillScreen;
