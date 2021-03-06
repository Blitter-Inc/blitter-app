import React, { useEffect, useState, useRef } from "react";
import { View, Button, Text, TextInput, ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";
import { useAppDispatch, useAppSelector } from "$store/hooks";
import { verifyCode } from "$store/slices/auth";
import { OTPVerifyScreenElement } from "$types/modules/auth";
import { AuthContainer } from "../components";
import Styles from "./styles";
import { CodeChangeEventType } from "$types/helpers";


const useRequiredState = () => {
  const authState = useAppSelector(state => state.auth);
  return {
    isLoading: authState.isLoading,
    codeSent: authState.codeSent,
    codeVerified: authState.codeVerified,
    verificationId: authState.verificationId,
    phoneNumber: authState.credentials.user.phoneNumber,
  };
}

const OTPVerifyScreen: OTPVerifyScreenElement = ({ navigation }) => {
  const state = useRequiredState();
  const dispatch = useAppDispatch();

  const codeRef = Array.from(Array(6), () => useRef<TextInput>(null));
  const codeArray = Array.from(Array(6), () => {
    const [code, setCode] = useState("");
    return { code, setCode };
  });

  useEffect(() => {
    if (state.codeVerified) {
      navigation.push("UpdateProfile");
    }
  }, [state.codeVerified]);

  const onCodeEntry = (index: number) => (text: string) => {
    if (isNaN(parseInt(text))) {
      return;
    }
    codeArray[index].setCode(text);
    if (index < 5) {
      codeRef[index + 1].current?.focus();
    }
  }

  const onCodeChange = (index: number) => ({ nativeEvent: { key: eventValue } }: CodeChangeEventType) => {
    if (eventValue !== "Backspace") {
      return;
    }
    codeArray[index].setCode("");
    if (index > 0) {
      codeRef[index - 1].current?.focus();
    }
  }

  const onCodeSubmit = () => {
    return dispatch(verifyCode({
      code: codeArray.map(el => el.code).join(""),
      verificationId: state.verificationId,
    }));
  }

  return (
    <AuthContainer>
      <View style={Styles.cardContainer}>
        <Text style={Styles.bigText}>Verify Your Account</Text>
        <Text style={Styles.smallText}>Enter OTP send to {state.phoneNumber}</Text>
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
      <Overlay isVisible={state.isLoading} fullScreen>
        <ActivityIndicator color="blue" size={48} style={{ height: "100%" }} />
      </Overlay>
    </AuthContainer>
  );
};


export default OTPVerifyScreen;
