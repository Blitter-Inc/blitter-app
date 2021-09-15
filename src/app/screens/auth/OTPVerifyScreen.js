import React, { useEffect, useState, useRef } from "react";
import { Alert, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { BigText, OTPInput, Loader, RootView, SmallText } from "@components/ui";
import { checkVerificationCode, toggleLoading } from '@store/actions/auth';


const OTPVerifyScreen = ({ state, dispatcher, navigation }) => {
  const [otpArray, setOtpArray] = useState(["", "", "", "", "", ""]);
  const [code, setCode] = useState(null);

  const otp1 = useRef(null);
  const otp2 = useRef(null);
  const otp3 = useRef(null);
  const otp4 = useRef(null);
  const otp5 = useRef(null);
  const otp6 = useRef(null);

  useEffect(() => {
    if (state.codeVerified) {
      Alert.alert('You are now logged in!');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }
  }, [state.codeVerified]);

  const onOtpChange = (index) => {
    return (value) => {
      if (isNaN(Number(value))) {
        return;
      }
      const otpArrayCopy = [...otpArray];
      otpArrayCopy[index] = value;
      setOtpArray(otpArrayCopy);
      const otp = otpArrayCopy.join("");
      setCode(otp);

      if (value !== "") {
        if (index === 0) {
          otp2.current.focus();
        } else if (index === 1) {
          otp3.current.focus();
        } else if (index === 2) {
          otp4.current.focus();
        } else if (index === 3) {
          otp5.current.focus();
        } else if (index === 4 || index === 5) {
          otp6.current.focus();
        }
      }
    };
  };

  const onOtpKeyPress = (index) => {
    return ({ nativeEvent: { key: value } }) => {
      if (value === "Backspace" && otpArray[index] === "") {
        if (index === 1) {
          otp1.current.focus();
        } else if (index === 2) {
          otp2.current.focus();
        } else if (index === 3) {
          otp3.current.focus();
        } else if (index === 4) {
          otp4.current.focus();
        } else if (index === 5) {
          otp5.current.focus();
        }

        if (index > 0) {
          const otpArrayCopy = otpArray.concat();
          otpArrayCopy[index - 1] = "";
          setOtpArray(otpArrayCopy);
          const otp = otpArrayCopy.join("");
          setCode(otp);
        }
      }
    };
  };

  return (
    <RootView style={styles.screen}>
      {state.isLoading && <Loader />}
      <View style={styles.cardContainer}>
        <BigText style={styles.bigText}>Verify Your Account</BigText>
        <SmallText style={styles.smallText}>
          Enter OTP send to {state.phone}
        </SmallText>
        <View style={styles.otpContainer}>
          {[otp1, otp2, otp3, otp4, otp5, otp6].map((inputRef, index) => (
            <OTPInput
              value={otpArray[index]}
              onChangeText={onOtpChange(index)}
              onKeyPress={onOtpKeyPress(index)}
              keyboardType={"numeric"}
              maxLength={1}
              refCallback={inputRef}
              key={index}
              autoFocus={index === 0 ? true : undefined}
            />
          ))}
        </View>
        <View style={styles.button}>
          <Button
            title="Verify OTP"
            color="#065A82"
            disabled={code == null || code.length != 6}
            onPress={() => {
              dispatcher.toggleLoading();
              dispatcher.verifyCode(code, state.verificationId);
            }}
          />
        </View>
      </View>
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
