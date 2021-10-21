import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Input } from "react-native-elements";
import { AmountInput, BadgePicker, MultilineInput, PickerItem, SafeAreaView, TitleInput } from "$components/index";
import { Styles } from "$config/theme";
import {
  BillObject,
  BillStatus,
  BillType,
  BillScreenElement,
} from "$types/modules/bill";


const initialBill: BillObject = {
  name: "",
  amount: "",
  settledAmt: "",
  type: BillType.DEFAULT,
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
      <ScrollView style={[styles.container, Styles.ContentContainer]}>
        <TitleInput
          value={bill.name}
          placeholder="Enter bill name"
          onChangeText={(name: string) => updateBill({ name })}
          selectTextOnFocus={true}
        />
        <View style={styles.pillContainer}>
          <AmountInput
            value={bill.amount}
            placeholder="Amount"
            onChangeText={(amount: string) => updateBill({ amount })}
            keyboardType="numeric"
            textContentType="telephoneNumber"
            containerStyle={styles.amountPill}
          />
          <BadgePicker selectedValue={bill.type} onValueChange={(type: BillType) => updateBill({ type })}>
            <PickerItem label="Type" value={BillType.DEFAULT} enabled={false} />
            <PickerItem label="Food" value={BillType.FOOD} />
            <PickerItem label="Shopping" value={BillType.SHOPPING} />
            <PickerItem label="Misc" value={BillType.MISC} />
          </BadgePicker>
        </View>
        <MultilineInput
          value={bill.description}
          placeholder="Tap to provide description for the bill."
          onChangeText={(description: string) => updateBill({ description })}
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
  container: {
    marginHorizontal: 5,
    paddingBottom: 8,
  },
  pillContainer: {
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
  },
  amountPill: {
    width: "56%"
  },
});


export default BillScreen;
