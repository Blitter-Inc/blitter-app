import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Avatar, LinearProgress, Button } from "react-native-elements";
import { BillSubscribersComponent } from "$types/modules/bill";
import { ColorPalette } from "$config/theme";
import { CheckMarkIcon, RupeeIcon } from "$components/Icons";

const BillSubscriber: BillSubscribersComponent = ({ subscriber }) => {
  return (
    <View style={styles.subscribersContainer}>
      <View style={styles.topContainer}>
        <View style={styles.rowContainer}>
          <Avatar size={45} source={{ uri: subscriber.avatar }} />
          <View>
            <Text style={styles.font}> {subscriber.name}</Text>
            {subscriber.splitAmt === subscriber.paidAmt ? (
              <Text style={styles.statusText}>
                Paid{" "}
                <RupeeIcon
                  color={ColorPalette.SECONDARY}
                  size={10}
                  styles={{
                    padding: 0,
                    margin: 0,
                    position: "relative",
                    top: 1,
                  }}
                />
                {subscriber.splitAmt}
              </Text>
            ) : (
              <Text style={styles.statusText}>Paying...</Text>
            )}
          </View>
        </View>
        <View style={styles.rowContainer}>
          {subscriber.splitAmt === subscriber.paidAmt ? (
            <CheckMarkIcon color="red" />
          ) : (
            <>
              <RupeeIcon color={ColorPalette.FONT.TEXT} />
              <Text style={styles.font}>{subscriber.splitAmt}</Text>
            </>
          )}
        </View>
      </View>
      {subscriber.paidAmt !== subscriber.splitAmt ? (
        <View style={styles.bottomContainer}>
          <LinearProgress
            variant="determinate"
            value={
              parseFloat(subscriber.paidAmt) / parseFloat(subscriber.splitAmt)
            }
            color="red"
            style={{ flex: 1, marginRight: 10, padding: 10, borderRadius: 10 }}
          />
          <Button
            buttonStyle={{ height: 30, width: 60 }}
            title={`Pay Rs.${
              parseFloat(subscriber.splitAmt) - parseFloat(subscriber.paidAmt)
            }`}
            titleStyle={{ fontSize: 10 }}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  subscribersContainer: {
    padding: 10,
    backgroundColor: ColorPalette.FONT.PLACEHOLDER,
    borderRadius: 25,
    marginBottom: 10,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  font: {
    fontSize: 15,
  },
  statusText: {
    fontSize: 10,
    marginLeft: 5,
    color: ColorPalette.SECONDARY,
    fontWeight: "bold",
  },
  bottomContainer: {
    marginTop: 10,
    marginHorizontal: 5,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default BillSubscriber;
