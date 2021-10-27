import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Avatar, Badge } from "react-native-elements";
import { BillCardComponent, BillStatus } from "$types/modules/bill";
import { useAppTheme } from "$config/theme";
import { RupeeIcon } from "$components/Icons";


const BillCard: BillCardComponent = ({ bill }) => {
  const ColorPallete = useAppTheme();

  return (
    <View style={[style.billCard, { backgroundColor: ColorPallete.PRIMARY }]}>
      <View style={style.topContainer}>
        <Text style={[style.billName, { color: ColorPallete.ACCENT }]}># {bill.name}</Text>
        <View style={style.badgeContainer}>
          <Badge
            status="primary"
            containerStyle={{ marginRight: 5 }}
            value={<Text style={style.badgeText}>{bill.type.toUpperCase()}</Text>}
          />
          <Badge
            status={bill.status === BillStatus.FULFILLED ? "success" : "error"}
            value={<Text style={style.badgeText}>{bill.status.toUpperCase()}</Text>}
          />
        </View>
      </View>
      <View style={style.bottomContainer}>
        <View style={{flexDirection: "row", alignItems:"center"}}>
          <RupeeIcon color={"green"} />
          <Text style={style.amountText}> {bill.settledAmt}/ {bill.amount}</Text>
        </View>
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
        <Text style={[style.subText, { color: ColorPallete.FONT.SUBTEXT }]}>By: {bill.createdBy}</Text>
        <Text style={[style.subText, { color: ColorPallete.FONT.SUBTEXT }]}>Updated: {bill.lastUpdatedAt}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  billCard: {
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 1,
  },
  billName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  badgeContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  amountText: {
    fontSize: 18,
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
  subText: {
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
