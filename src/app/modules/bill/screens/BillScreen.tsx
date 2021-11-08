import React, { useState } from "react";
import { ScrollView, StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-elements";
import {
  AmountInput,
  AttachIcon,
  BottomCurve,
  ContactPicker,
  EditIcon,
  LabeledContainer,
  MiscelleneousIcon,
  PeopleAddIcon,
  Pill,
  SafeAreaView,
  TitleInput,
} from "$components/index";
import { Styles, useAppTheme } from "$config/theme";
import {
  billSubscriberPropsGenerator,
  generateBillTypeMap,
  generateEditableBill,
} from "$helpers/bill";
import { generateDisplayDate } from "$helpers/date";
import {
  BillObjectInput,
  BillStatus,
  BillType,
  BillScreenElement,
} from "$types/modules/bill";
import { ContactObjectMap } from "$types/store";
import BillSubscriber from "../components/BillSubscriber";


const BillTypeMap = generateBillTypeMap();

const initialBill: BillObjectInput = {
  name: "",
  amount: "",
  type: BillType.DEFAULT,
  description: "",
  subscribers: [],
  attachments: [],
};

const BillScreen: BillScreenElement = ({ route }) => {
  const ColorPalette = useAppTheme();

  const { billObj, contactMap, loggedInUser } = route.params;
  const generateBillSubscriberProps = billSubscriberPropsGenerator({ contactMap, loggedInUser });
  const BillTypeChoices = Array.from(BillTypeMap.keys()).filter(key => key != billObj?.type);

  const [bill, setBill] = useState(billObj ? generateEditableBill({ bill: billObj }) : initialBill);
  const [editMode, setEditMode] = useState(billObj ? false : true);
  const [selectedContacts, setSelectedContacts] = useState<ContactObjectMap>({});
  const [selectedContactsCount, setSelectedCountactsCount] = useState(0);
  const [contactPopupVisible, setContactPopupVisible] = useState(false);

  const updateBill = (billInput: Partial<BillObjectInput>) => {
    setBill({ ...bill, ...billInput });
  };

  const updateBillType = (type: BillType) => () => {
    if (editMode) { updateBill({ type }) };
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
      // TODO: Make this work after handling case for a bill already having subscribers
      // updateBill({ subscribers: [] });
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
          editable={editMode}
        />
        <View style={styles.pillContainer}>
          <AmountInput
            value={bill.amount}
            size={20}
            placeholder="Amount"
            onChangeText={(amount: string) => updateBill({ amount })}
            keyboardType="numeric"
            textContentType="telephoneNumber"
            containerStyle={styles.amountPill}
            editable={editMode}
            style={styles.amountPillInput}
          />
          <Pill
            label={billObj ? billObj.status.toUpperCase() : BillStatus.NEW.toUpperCase()}
            size={18}
            LeftIcon={MiscelleneousIcon}
            containerStyle={styles.statusPill}
          />
        </View>
        <LabeledContainer label="Type" labelProps={{ style: Styles.ContentContainer }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} scrollEnabled={editMode}>
            <View style={{ width: 5 }} />
            {
              billObj && <Pill
                size={16}
                LeftIcon={BillTypeMap.get(billObj.type)?.icon}
                label={BillTypeMap.get(billObj.type)?.label ?? ""}
                onPress={updateBillType(billObj.type)}
                containerStyle={billTypePillContainerStyle(billObj.type)}
              />
            }
            {BillTypeChoices.map((type, index) => <Pill
              key={index}
              size={16}
              LeftIcon={BillTypeMap.get(type)?.icon}
              label={BillTypeMap.get(type)?.label ?? ""}
              onPress={updateBillType(type)}
              containerStyle={billTypePillContainerStyle(type)}
            />)}
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
            editable={editMode}
          />
        </LabeledContainer>
        {
          bill.subscribers.length ? (
            <LabeledContainer label="Subscribers" containerStyle={{ ...Styles.ContentContainer, ...styles.subscriberContainer }}>
              <ScrollView showsVerticalScrollIndicator={false}>
                {
                  // rendering billObj.subscribers incase of non-edit mode to showcase amountPaid and other details.
                  // and bill.subscribers incase of edit mode as these details are not needed.
                  (editMode ?
                    bill.subscribers :
                    (billObj?.subscribers ?? [])
                  ).map((subscriber, index) => <BillSubscriber
                    key={index}
                    {...generateBillSubscriberProps(subscriber, editMode)}
                  />)
                }
              </ScrollView>
            </LabeledContainer>
          ) : undefined
        }
      </ScrollView>
      <View style={styles.bottomToolbar}>
        {
          (billObj && !editMode) ? (
            <View style={styles.bottomToolbarInfo}>
              <Text style={[styles.bottomToolbarText, { color: ColorPalette.INVERT.PRIMARY }]}>Created: {generateDisplayDate(billObj.createdAt)}</Text>
              <Text style={[styles.bottomToolbarText, { color: ColorPalette.INVERT.PRIMARY }]}>Last Updated: {generateDisplayDate(billObj.lastUpdatedAt)}</Text>
            </View>
          ) : undefined
        }
        <View style={styles.bottomToolbarActions}>
          {
            editMode ? (
              <>
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
              </>
            ) : (
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
                onPress={() => setEditMode(true)}
              >
                <>
                  <EditIcon
                    color={ColorPalette.INVERT.PRIMARY}
                    size={25}
                    containerStyle={styles.bottomToolbarIcon}
                  />
                  <Text style={{ color: ColorPalette.INVERT.PRIMARY, fontSize: 15, marginLeft: 5 }}>Tap to edit</Text>
                </>
              </TouchableOpacity>
            )
          }
        </View>
      </View>
      {
        editMode && (
          <>
            <Button
              title={billObj ? "Save" : "Add"}
              buttonStyle={[styles.button, { backgroundColor: ColorPalette.ACCENT }]}
            />
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
          </>
        )
      }
      <BottomCurve />
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
  amountPillInput: {
    width: "100%",
    padding: 8,
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
