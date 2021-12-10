import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Avatar, Badge } from "react-native-elements";
import TextTicker from 'react-native-text-ticker'
import { BillCardComponent, BillStatus } from "$types/modules/bill";
import { useAppTheme } from "$config/theme";
import { RupeeIcon } from "$components/Icons";


const BillCard: BillCardComponent = props => {
  const ColorPallete = useAppTheme();

  return (
    <View style={[style.billCard, { backgroundColor: ColorPallete.PRIMARY }]}>
      <View style={style.topContainer}>
        <TextTicker 
          style={[style.billName, { color: ColorPallete.ACCENT }]} 
          duration={5000}
          loop
          bounce
          repeatSpacer={50}
          marqueeDelay={1000}># {props.name}
        </TextTicker>
        <View style={style.badgeContainer}>
          <Badge
            status="primary"
            containerStyle={{ marginRight: 5 }}
            value={<Text style={style.badgeText}>{props.type}</Text>}
          />
          <Badge
            status={props.status === BillStatus.FULFILLED.toUpperCase() ? "success" : "error"}
            value={<Text style={style.badgeText}>{props.status}</Text>}
          />
        </View>
      </View>
      <View style={style.bottomContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RupeeIcon color={"green"} size={style.amountText.fontSize} />
          <Text style={style.amountText}> {props.settledAmt} / {props.amount}</Text>
        </View>
        <View style={style.avatarContainer}>
          {props.subscriberAvatars.map(({ title, uri }, index) =>
            <View
              key={index}
              style={{ right: `${index * 50}%`, zIndex: index }}
            >
              <Avatar title={title} source={{ uri }} size={30} />
            </View>
          )}
          {props.subscriberCount - 2 > 0 ? (
            <Text style={style.avatarText}>+{props.subscriberCount - 2}</Text>
          ) : null}
        </View>
      </View>
      <View style={style.bottomContainer}>
        <Text style={[style.subText, { color: ColorPallete.FONT.SUBTEXT }]}>
          Created By: {props.createdBy}
        </Text>
        <Text style={[style.subText, { color: ColorPallete.FONT.SUBTEXT }]}>
          Updated: {props.lastUpdatedAt}
        </Text>
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
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 4,
  },
  billName: {
    fontSize: 18,
    fontWeight: "bold",
    width: 150,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  badgeContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 5,
  },
  amountText: {
    fontSize: 14,
    color: "green",
    fontWeight: "bold",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0,
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
    paddingHorizontal: 8,
    fontSize: 10,
  },
});

export default BillCard;
