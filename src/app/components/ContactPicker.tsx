import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Avatar, Button, Overlay, Text } from "react-native-elements";
import { useAppSelector } from "$store/hooks";
import { ContactPickerComponent, ContactPickerItemComponent } from "$types/components";
import ListContainer from "./ListContainer";


const useRequiredState = () => {
  return useAppSelector(state => state.cache.contact);
};

export const ContactPickerItem: ContactPickerItemComponent = ({ contact, selected, colors, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={[styles.item, (selected ? { backgroundColor: colors?.highlight } : undefined)]}>
      <Avatar title={contact.name?.[0]} source={{ uri: contact.avatar }} rounded size={40} />
      <View style={styles.textContainer}>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">{contact.name}</Text>
        {contact.bio ? <Text style={styles.bio}>{contact.bio}</Text> : undefined}
      </View>
    </View>
  </TouchableWithoutFeedback>
);

const ContactPicker: ContactPickerComponent = ({ overlayProps, colors, selectedContacts, contactMap }) => {
  const contactState = useRequiredState();

  return (
    <Overlay
      {...overlayProps}
      fullScreen
      overlayStyle={[styles.overlay, overlayProps.style]}
    >
      <Text h3 style={[styles.title, { color: colors.title }]}>Add People</Text>
      <Text style={[styles.subtext, { color: colors.subtext }]}>
        {contactState.totalCount} contacts{selectedContacts?.count ? `, ${selectedContacts.count} selected` : ""}
      </Text>
      {
        selectedContacts?.count ? (
          <View style={styles.selectedContactPreview}>
            {
              Object.keys(selectedContacts.objectMap).map(contactId => (
                <Avatar
                  key={contactId}
                  title={contactMap[contactId].name[0]}
                  source={{ uri: contactMap[contactId].avatar }}
                  size={55}
                  rounded
                  containerStyle={styles.selectedContact}
                  onPress={selectedContacts.toggle(parseInt(contactId))}
                >
                  <Avatar.Accessory type="entypo" iconProps={{ name: "circle-with-cross" }} size={18} />
                </Avatar>)
              )
            }
          </View>
        ) : undefined
      }
      <ListContainer style={styles.listContainer} contentContainerStyle={{ alignItems: "center" }}>
        {Object.values(contactState.objectMap).map(contact => <ContactPickerItem
          key={contact.id}
          contact={contact}
          selected={selectedContacts?.objectMap && contact.id in selectedContacts?.objectMap}
          onPress={selectedContacts?.toggle(contact.id)}
          colors={{ highlight: colors.selectedItem }}
        />)}
      </ListContainer>
      <Button title={selectedContacts?.count ? "Add" : "Cancel"} onPress={overlayProps.onBackdropPress} />
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlay: {
    maxHeight: "85%",
    maxWidth: "92%",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  title: {
    marginBottom: 5,
  },
  subtext: {
    marginBottom: 15,
  },
  selectedContactPreview: {
    flexDirection: "row",
  },
  selectedContact: {
    marginRight: 8,
  },
  listContainer: {
    marginTop: 15,
  },
  itemContainer: {
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginVertical: 2,
    width: "100%",
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 8,
  },
  name: {
    fontSize: 15,
  },
  bio: {
    fontSize: 12,
    color: "grey",
  },
  itemCheckbox: {
    marginLeft: "auto",
  },
});


export default ContactPicker;
