import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Input } from "react-native-elements";
import {
  AddIcon,
  AmountInput,
  BadgePicker,
  FileGallery,
  DescriptionInput,
  PickerItem,
  Pill,
  SafeAreaView,
  TitleInput,
} from "$components/index";
import { Styles } from "$config/theme";
import {
  BillObject,
  BillStatus,
  BillType,
  BillScreenElement,
} from "$types/modules/bill";


type IterableComponent = () => JSX.Element;

interface WidgetMap {
  description: IterableComponent;
  gallery: IterableComponent;
  people: IterableComponent;
};

interface WidgetFlags {
  description: boolean;
  gallery: boolean;
  people: boolean;
};

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

const BillOptionPill: (props: { label: string, onPress: () => void; }) => JSX.Element = ({ label, onPress }) => {
  const size = 16;
  return (
    <Pill
      label={label}
      icon={<AddIcon color="white" size={size} styles={{ paddingLeft: 5, paddingTop: 1 }} />}
      size={size}
      onPress={onPress}
    />
  );
};

const BillScreen: BillScreenElement = ({ route }) => {
  const { billObj } = route.params;

  const [bill, setBill] = useState<BillObject>(billObj ?? initialBill);
  const [enabledWidgets, setEnabledWidgets] = useState<WidgetFlags>({
    description: Boolean(billObj && billObj.description),
    gallery: Boolean(billObj && billObj.attachments.length),
    people: Boolean(billObj && billObj.subscribers.length),
  });

  const widgetMap: WidgetMap = {
    description: () => (
      <DescriptionInput
        value={bill.description}
        placeholder="Type here..."
        onChangeText={(description: string) => updateBill({ description })}
      />
    ),
    gallery: () => (<FileGallery />),
    people: () => (<></>),
  };

  const initialWidgets = [
    ...(enabledWidgets.description ? [widgetMap.description] : []),
    ...(enabledWidgets.gallery ? [widgetMap.gallery] : []),
    ...(enabledWidgets.people ? [widgetMap.people] : []),
  ];

  const [widgets, setWidgets] = useState<IterableComponent[]>(initialWidgets);
  const [pillCount, setPillCount] = useState(3 - widgets.length);

  const updateBill = (billInput: Partial<BillObject>) => {
    setBill({ ...bill, ...billInput });
  };

  const enableWidget = (widget: keyof WidgetFlags) => {
    return () => {
      setEnabledWidgets({ ...enabledWidgets, [widget]: true });
      setWidgets([widgetMap[widget], ...widgets]);
      setPillCount(pillCount - 1);
    };
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
        {
          pillCount ? (
            <View style={styles.optionPillContainer}>
              {!enabledWidgets.people && <BillOptionPill label="Invite People" onPress={enableWidget("people")} />}
              {!enabledWidgets.description && <BillOptionPill label="Add description" onPress={enableWidget("description")} />}
              {!enabledWidgets.gallery && <BillOptionPill label="Attach files" onPress={enableWidget("gallery")} />}
            </View>
          ) : undefined
        }
        {widgets.map((Widget, key: number) => <Widget key={key} />)}
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
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
  },
  amountPill: {
    width: "56%"
  },
  optionPillContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 15,
  },
});


export default BillScreen;
