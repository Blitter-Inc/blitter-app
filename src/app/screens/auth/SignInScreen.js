import React, { useEffect, useState, useRef } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { Loader, RootView, BigText } from "@components/ui";
import Firebase from "@config/firebase";
import { initPhoneSignIn, toggleLoading } from "@store/actions/auth";


const SignInScreen = ({ state, dispatcher, navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState(state.phoneNumber);
  const recaptchaVerifier = useRef(null);

  useEffect(() => {
    if (state.codeSent) {
      navigation.push("OTPVerify");
    }
  }, [state.codeSent]);

  return (
    <RootView>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={Firebase.app().options}
        attemptInvisibleVerification={true}
      />
      <View style={styles.cardContainer}>
        <BigText style={styles.bigText}>Enter Phone Number</BigText>
        <TextInput
          value={phoneNumber}
          placeholder="+91 XXXXX XXXXX"
          autoFocus
          autoCompleteType="tel"
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          onChangeText={setPhoneNumber}
        />
        <View style={styles.button}>
          <Button
            title="Generate OTP"
            color="#065A82"
            disabled={phoneNumber == null || phoneNumber.length != 13}
            onPress={() => {
              dispatcher.toggleLoading();
              dispatcher.initPhoneSignIn(phoneNumber, recaptchaVerifier.current);
            }}
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
    codeSent: state.auth.codeSent,
    phoneNumber: state.auth.credentials.user.phoneNumber,
  },
});

const mapDispatchToProps = (dispatch) => ({
  dispatcher: {
    initPhoneSignIn: (phoneNumber, recaptchaVerifier) => dispatch(initPhoneSignIn(phoneNumber, recaptchaVerifier)),
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
  button: {
    margin: 5,
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
