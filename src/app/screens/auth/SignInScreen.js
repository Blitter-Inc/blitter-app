import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import Firebase from '@config/firebase';
import { initPhoneSignIn } from '@store/actions/auth';


const SignInScreen = ({ state, dispatcher, navigation }) => {
  const recaptchaVerifier = useRef(null);

  const [phoneNumber, setPhoneNumber] = useState();

  return (
    <View>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={Firebase.app().options}
        attemptInvisibleVerification={true}
      />
      <Text>Enter Phone Number</Text>
      <TextInput
        placeholder='+91 XXXXX XXXXX'
        autoFocus
        autoCompleteType='tel'
        keyboardType='phone-pad'
        textContentType='telephoneNumber'
        onChangeText={setPhoneNumber}
      />
      <Button
        title='Generate OTP'
        disabled={phoneNumber == null || phoneNumber.length != 13}
        onPress={() => {
          dispatcher.initPhoneSignIn(phoneNumber, recaptchaVerifier.current);
          navigation.push('OTPVerify');
        }}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  state: {},
});

const mapDispatchToProps = dispatch => ({
  dispatcher: {
    initPhoneSignIn: (phoneNumber, recaptchaVerifier) => dispatch(initPhoneSignIn(phoneNumber, recaptchaVerifier)),
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
