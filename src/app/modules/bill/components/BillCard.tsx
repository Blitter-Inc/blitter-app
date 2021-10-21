import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Avatar, Badge } from "react-native-elements";
import { BillCardComponent } from "$types/modules/bill";


const BillCard: BillCardComponent = ({ bill }) => {
  return (
    <View style={style.billCard}>
      <View style={style.topContainer}>
        <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>
          <Text>{bill.name}</Text>
          <Badge
            status="primary"
            containerStyle={{ alignSelf: "center", marginLeft: 5 }}
            value={<Text style={style.badgeText}>{bill.type}</Text>}
          />
        </View>
        {bill.amount === bill.settledAmt ? (
          <Badge
            status="success"
            value={<Text style={style.badgeText}>Settled</Text>}
          />
        ) : (
          <Badge
            status="error"
            value={<Text style={style.badgeText}>Unsettled</Text>}
          />
        )}
      </View>
      <View style={style.bottomContainer}>
        <Text style={style.amountText}>
          Rs. {bill.settledAmt}/ {bill.amount}
        </Text>
        <View style={style.avatarContainer}>
          {bill.subscribers.map((subs, index) =>
            index < 2 ? (
              <View
                key={index}
                style={{ right: `${index * 50}%`, zIndex: index }}
              >
                <Avatar source={{ uri: subs.avatar }} />
              </View>
            ) : null
          )}
          {bill.subscribers.length - 2 > 0 ? (
            <Text style={style.avatarText}>+{bill.subscribers.length - 2}</Text>
          ) : null}
        </View>
      </View>
      <View style={style.bottomContainer}>
        <Text style={style.createdText}>By: {bill.createdBy}</Text>
        <Text style={style.createdText}>Updated: {bill.lastUpdatedAt}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  billCard: {
    margin: 5,
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 1,
    shadowColor: "black",
    shadowOpacity: 1,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amountText: {
    fontSize: 15,
    color: "green",
    fontWeight: "bold",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatarText: {
    fontSize: 10,
    right: "40%",
    textAlign: "left",
  },
  createdText: {
    fontSize: 10,
    color: "grey",
  },
  badgeText: {
    color: "white",
    padding: 10,
    fontSize: 10,
  },
});

export default BillCard;
