import React, { useEffect, useState, useRef } from "react";
import { Alert, View, Button, Text, TextInput } from "react-native";
import { connect } from "react-redux";
import { Loader, RootView } from "@components/ui";
import { checkVerificationCode, toggleLoading } from "@store/actions/auth";
import Styles from "./styles";


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
      <View style={Styles.cardContainer}>
        <Text style={Styles.bigText}>Verify Your Account</Text>
        <Text style={Styles.smallText}>Enter OTP send to {state.phone}</Text>
        <View style={Styles.otpContainer}>
          {codeRef.map((inputRef, index) => {
            return (
              <View key={index} style={Styles.otpContainerStyle}>
                <></>
                <TextInput
                  value={codeArray[index].code}
                  ref={inputRef}
                  style={[Styles.otpTextInputStyle]}
                  keyboardType="numeric"
                  maxLength={1}
                  autoFocus={index === 0}
                  onChangeText={onCodeEntry(index)}
                  onKeyPress={onCodeChange(index)}
                />
                <></>
              </View>
            );
          })}
        </View>
        <View style={Styles.button}>
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


export default connect(mapStateToProps, mapDispatchToProps)(OTPVerifyScreen);
