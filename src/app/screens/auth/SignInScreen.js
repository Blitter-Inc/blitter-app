import React, { useEffect, useState, useRef } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { AuthContainer } from "@components/auth";
import { Loader } from "@components/ui";
import Firebase from "@config/firebase";
import { initPhoneSignIn, toggleLoading } from "@store/actions/auth";
import Styles from "./styles";


const SignInScreen = ({ state, dispatcher, navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState(state.phoneNumber);
  const recaptchaVerifier = useRef(null);

  useEffect(() => {
    if (state.codeSent) {
      navigation.push("OTPVerify");
    }
  }, [state.codeSent]);

  return (
    <AuthContainer>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={Firebase.app().options}
        attemptInvisibleVerification={true}
      />
      <View style={Styles.cardContainer}>
        <Text style={Styles.bigText}>Enter Phone Number</Text>
        <TextInput
          value={phoneNumber}
          placeholder="+91 XXXXX XXXXX"
          autoFocus
          autoCompleteType="tel"
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          onChangeText={setPhoneNumber}
        />
        <View style={Styles.button}>
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
    </AuthContainer>
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


export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
