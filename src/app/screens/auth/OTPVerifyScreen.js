import React, { useEffect, useState, useRef } from "react";
import { Alert, View, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { BigText, OTPInput, Loader, RootView, SmallText } from "@components/ui";
import { checkVerificationCode, toggleLoading } from "@store/actions/auth";


const OTPVerifyScreen = ({ state, dispatcher, navigation }) => {
  const codeRef = Array.from(Array(6), () => useRef(null));
  const codeArray = Array.from(Array(6), () => {
    const [code, setCode] = useState("");
    return { code, setCode };
  });

  useEffect(() => {
    if (state.codeVerified) {
      Alert.alert("You are now logged in!");
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    }
  }, [state.codeVerified]);

  const onCodeEntry = index => text => {
    if (isNaN(parseInt(text))) {
      return;
    }
    codeArray[index].setCode(text);
    if (index < 5) {
      codeRef[index + 1].current.focus();
    }
  }

  const onCodeChange = index => ({ nativeEvent: { key: eventValue } }) => {
    if (eventValue !== "Backspace") {
      return;
    }
    codeArray[index].setCode("");
    if (index > 0) {
      codeRef[index - 1].current.focus();
    }
  }

  const onCodeSubmit = () => {
    dispatcher.toggleLoading();
    dispatcher.verifyCode(codeArray.map(el => el.code).join(""), state.verificationId);
  }

  return (
    <RootView>
      <View style={styles.cardContainer}>
        <BigText style={styles.bigText}>Verify Your Account</BigText>
        <SmallText style={styles.smallText}>
          Enter OTP send to {state.phone}
        </SmallText>
        <View style={styles.otpContainer}>
          {codeRef.map((inputRef, index) => {
            return (
              <OTPInput
                value={codeArray[index].code}
                onChangeText={onCodeEntry(index)}
                onKeyPress={onCodeChange(index)}
                keyboardType="numeric"
                maxLength={1}
                refCallback={inputRef}
                key={index}
                autoFocus={index === 0}
              />
            );
          })}
        </View>
        <View style={styles.button}>
          <Button
            title="Verify OTP"
            color="#065A82"
            disabled={codeArray.some(el => isNaN(parseInt(el.code)))}
            onPress={onCodeSubmit}
          />
        </View>
      </View>
      {state.isLoading && <Loader />}
    </RootView>
  );
};

const mapStateToProps = (state) => ({
  state: {
    isLoading: state.auth.isLoading,
    codeVerified: state.auth.codeVerified,
    verificationId: state.auth.credentials.verificationId,
    phone: state.auth.credentials.user.phoneNumber,
  },
});

const mapDispatchToProps = (dispatch) => ({
  dispatcher: {
    verifyCode: (code, verificationId) =>
      dispatch(checkVerificationCode(code, verificationId)),
    toggleLoading: () => dispatch(toggleLoading()),
  },
});

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  bigText: {
    color: "#065A82",
  },
  smallText: {
    color: "grey",
  },
  otpContainer: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  button: {
    margin: 5,
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OTPVerifyScreen);
