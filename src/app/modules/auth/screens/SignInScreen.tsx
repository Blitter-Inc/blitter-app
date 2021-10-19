import React, { useEffect, useState, useRef } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { FirebaseRecaptchaVerifierModal, FirebaseAuthApplicationVerifier } from "expo-firebase-recaptcha";
import { AuthContainer } from "../components";
import { Loader } from "$components/index";
import Firebase from "$config/firebase";
import { useAppDispatch, useAppSelector } from "$store/hooks";
import { initPhoneSignIn } from "$store/slices/auth";
import Styles from "./styles";


const useRequiredState = () => {
  const authState = useAppSelector(state => state.auth);
  return {
    codeSent: authState.codeSent,
    isLoading: authState.isLoading,
    phoneNumber: authState.credentials.user.phoneNumber,
  };
}

const SignInScreen = ({ navigation }) => {
  const state = useRequiredState();
  const dispatch = useAppDispatch();

  const [phoneNumber, setPhoneNumber] = useState(state.phoneNumber);
  const recaptchaVerifier = useRef<FirebaseAuthApplicationVerifier>();

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
            onPress={() => dispatch(initPhoneSignIn({
              phoneNumber,
              recaptchaVerifier: recaptchaVerifier.current,
            }))}
          />
        </View>
      </View>
      {state.isLoading && <Loader />}
    </AuthContainer>
  );
};


export default SignInScreen;
