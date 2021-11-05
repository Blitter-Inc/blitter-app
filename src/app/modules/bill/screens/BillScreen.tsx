import React, { useState } from "react";
import { ScrollView, StyleSheet, TextInput, Text, View } from "react-native";
import { Button } from "react-native-elements";
import {
  AmountInput,
  AttachIcon,
  BottomCurve,
  ContactPicker,
  EntertainmentIcon,
  FoodIcon,
  LabeledContainer,
  MiscelleneousIcon,
  PeopleAddIcon,
  Pill,
  SafeAreaView,
  ShoppingIcon,
  StatusIcon,
  TitleInput,
} from "$components/index";
import { Styles, useAppTheme } from "$config/theme";
import { billSubscriberPropsGenerator } from "$helpers/bill";
import { generateDisplayDate } from "$helpers/index";
import {
  BillObject,
  BillStatus,
  BillType,
  BillScreenElement,
} from "$types/modules/bill";
import { ContactObjectMap } from "$types/store";
import BillSubscriber from "../components/BillSubscriber";


const initialBill: BillObject = {
  id: 0,
  name: "",
  amount: "",
  settledAmt: "",
  type: BillType.DEFAULT,
  eventName: "",
  description: "",
  status: BillStatus.NEW,
  createdBy: 0,
  createdAt: new Date().toDateString(),
  lastUpdatedAt: new Date().toDateString(),
  subscribers: [],
  attachments: [],
};

const BillScreen: BillScreenElement = ({ route }) => {
  const ColorPalette = useAppTheme();

  const { contactMap, user, billObj } = route.params;
  const generateBillSubscriberProps = billSubscriberPropsGenerator({ contactMap, user });

  const [bill, setBill] = useState<BillObject>(billObj ?? initialBill);
  const [selectedContacts, setSelectedContacts] = useState<ContactObjectMap>({});
  const [selectedContactsCount, setSelectedCountactsCount] = useState(0);
  const [contactPopupVisible, setContactPopupVisible] = useState(false);

  const updateBill = (billInput: Partial<BillObject>) => {
    setBill({ ...bill, ...billInput });
  };

  const toggleContactSelected = (contactId: number) => () => {
    if (contactId in selectedContacts) {
      const { [contactId]: _, ...contacts } = selectedContacts;
      setSelectedContacts(contacts);
      setSelectedCountactsCount(selectedContactsCount - 1);
    } else {
      setSelectedContacts({
        ...selectedContacts,
        [contactId]: contactMap?.[contactId],
      });
      setSelectedCountactsCount(selectedContactsCount + 1);
    }
  };

  const toggleContactPopup = () => {
    if (selectedContactsCount) {
      updateBill({
        subscribers: Object.keys(selectedContacts).map(contactid => ({
          id: parseInt(contactid),
          userId: parseInt(contactid),
          amount: String(bill.amount ? parseFloat(bill.amount) / selectedContactsCount : 0),
          amountPaid: "0",
          fulfilled: false,
        })
        ),
      });
    } else {
      // updateBill({ subscribers: [] });     // TODO: Make this work after handling case for a bill already having subscribers
    }
    setContactPopupVisible(!contactPopupVisible);
  };

  const billTypePillContainerStyle = (type: BillType) => {
    return { backgroundColor: (bill.type === type) ? "green" : ColorPalette.ACCENT };
  };

  return (
    <SafeAreaView style={[Styles.ExpandedContainer]}>
      <ScrollView style={[styles.container]} showsVerticalScrollIndicator={false}>
        <TitleInput
          value={bill.name}
          placeholder="Enter bill name"
          onChangeText={(name: string) => updateBill({ name })}
          selectTextOnFocus={true}
          containerStyle={Styles.ContentContainer}
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
          <Pill label={bill.status.toUpperCase()} size={18} LeftIcon={MiscelleneousIcon} containerStyle={styles.statusPill} />
        </View>
        <LabeledContainer label="Type" labelProps={{ style: Styles.ContentContainer }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ width: 5 }} />
            <Pill size={16} LeftIcon={FoodIcon} label="Food" onPress={() => updateBill({ type: BillType.FOOD })} containerStyle={billTypePillContainerStyle(BillType.FOOD)} />
            <Pill size={16} LeftIcon={ShoppingIcon} label="Shopping" onPress={() => updateBill({ type: BillType.SHOPPING })} containerStyle={billTypePillContainerStyle(BillType.SHOPPING)} />
            <Pill size={16} LeftIcon={EntertainmentIcon} label="Entertainment" onPress={() => updateBill({ type: BillType.ENTERTAINMENT })} containerStyle={billTypePillContainerStyle(BillType.ENTERTAINMENT)} />
            <Pill size={16} LeftIcon={StatusIcon} label="Miscelleneous" onPress={() => updateBill({ type: BillType.MISC })} containerStyle={billTypePillContainerStyle(BillType.MISC)} />
          </ScrollView>
        </LabeledContainer>
        <LabeledContainer label="Description" containerStyle={Styles.ContentContainer}>
          <TextInput
            value={bill.description}
            placeholder="Type here..."
            onChangeText={(description: string) => updateBill({ description })}
            multiline
            style={[styles.description, { color: ColorPalette.FONT.INPUT, borderBottomColor: ColorPalette.ACCENT }]}
            placeholderTextColor={ColorPalette.FONT.PLACEHOLDER}
          />
        </LabeledContainer>
        {
          (bill.subscribers && bill.subscribers.length) ? (
            <LabeledContainer label="Subscribers" containerStyle={{ ...Styles.ContentContainer, ...styles.subscriberContainer }}>
              <ScrollView showsVerticalScrollIndicator={false}>
                {bill.subscribers.map(subscriber => <BillSubscriber key={subscriber.id} {...generateBillSubscriberProps(subscriber)} />)}
              </ScrollView>
            </LabeledContainer>
          ) : undefined
        }
      </ScrollView>
      <View style={styles.bottomToolbar}>
        {
          billObj && (
            <View style={styles.bottomToolbarInfo}>
              <Text style={[styles.bottomToolbarText, { color: ColorPalette.INVERT.PRIMARY }]}>Created: {generateDisplayDate(bill.createdAt)}</Text>
              <Text style={[styles.bottomToolbarText, { color: ColorPalette.INVERT.PRIMARY }]}>Last Updated: {generateDisplayDate(bill.lastUpdatedAt)}</Text>
            </View>
          )
        }
        <View style={styles.bottomToolbarActions}>
          <PeopleAddIcon
            color={ColorPalette.INVERT.PRIMARY}
            size={30}
            containerStyle={styles.bottomToolbarIcon}
            onPress={toggleContactPopup}
          />
          <AttachIcon
            color={ColorPalette.INVERT.PRIMARY}
            size={27}
            containerStyle={styles.bottomToolbarIcon}
          />
        </View>
      </View>
      <Button
        title={billObj ? "Save" : "Add"}
        buttonStyle={[styles.button, { backgroundColor: ColorPalette.ACCENT }]}
      />
      <BottomCurve />
      <ContactPicker
        overlayProps={{ isVisible: contactPopupVisible, onBackdropPress: toggleContactPopup }}
        colors={{
          title: ColorPalette.ACCENT,
          subtext: ColorPalette.FONT.SUBTEXT,
          selectedItem: ColorPalette.FONT.PLACEHOLDER,
        }}
        selectedContacts={{
          count: selectedContactsCount,
          objectMap: selectedContacts,
          toggle: toggleContactSelected,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 8,
  },
  button: {
    height: 50,
  },
  pillContainer: {
    ...Styles.ContentContainer,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
  },
  amountPill: {
    maxWidth: "58%",
  },
  statusPill: {
    width: "36%",
  },
  pillIcon: {
    paddingLeft: 3,
    paddingRight: 5,
    paddingTop: 1,
  },
  description: {
    marginHorizontal: 8,
    maxHeight: 54,
  },
  subscriberContainer: {
    maxHeight: 275,
  },
  bottomToolbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  bottomToolbarInfo: {
    flexGrow: 1,
  },
  bottomToolbarActions: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  bottomToolbarIcon: {
    paddingLeft: 15,
  },
  bottomToolbarText: {
    fontSize: 11,
  },
});


export default BillScreen;
