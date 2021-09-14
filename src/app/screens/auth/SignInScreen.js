import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { Loader } from '@components/ui';
import Firebase from '@config/firebase';
import { initPhoneSignIn, toggleLoading } from '@store/actions/auth';


const SignInScreen = ({ state, dispatcher, navigation }) => {
  const recaptchaVerifier = useRef(null);

  const [phoneNumber, setPhoneNumber] = useState(state.phoneNumber);

  useEffect(() => {
    if (state.codeSent) {
      navigation.push('OTPVerify');
    }
  }, [state.codeSent]);

  return (
    <View>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={Firebase.app().options}
        attemptInvisibleVerification={true}
      />
      <Text>Enter Phone Number</Text>
      <TextInput
        value={phoneNumber}
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
          dispatcher.toggleLoading();
          dispatcher.initPhoneSignIn(phoneNumber, recaptchaVerifier.current);
        }}
      />
      {state.isLoading && <Loader />}
    </View>
  );
};

const mapStateToProps = state => ({
  state: {
    isLoading: state.auth.isLoading,
    codeSent: state.auth.codeSent,
    phoneNumber: state.auth.credentials.user.phoneNumber,
  },
});

const mapDispatchToProps = dispatch => ({
  dispatcher: {
    initPhoneSignIn: (phoneNumber, recaptchaVerifier) => dispatch(initPhoneSignIn(phoneNumber, recaptchaVerifier)),
    toggleLoading: () => dispatch(toggleLoading()),
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
