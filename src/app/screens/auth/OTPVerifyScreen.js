import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { Loader } from '@components/ui';
import { checkVerificationCode, toggleLoading } from '@store/actions/auth';


const OTPVerifyScreen = ({ state, dispatcher, navigation }) => {
  const [code, setCode] = useState(null);

  useEffect(() => {
    if (state.codeVerified) {
      navigation.push('Success');
    }
  }, [state.codeVerified]);

  return (
    <View>
      <Text>Enter OTP</Text>
      <TextInput
        placeholder='XXXXXX'
        autoFocus
        onChangeText={setCode}
      />
      <Button
        title='Verify OTP'
        disabled={code == null || code.length != 6}
        onPress={() => {
          dispatcher.toggleLoading();
          dispatcher.verifyCode(code, state.verificationId);
        }}
      />
      {state.isLoading && <Loader />}
    </View>
  );
};

const mapStateToProps = state => ({
  state: {
    isLoading: state.auth.isLoading,
    codeVerified: state.auth.codeVerified,
    verificationId: state.auth.credentials.verificationId,
  },
});

const mapDispatchToProps = dispatch => ({
  dispatcher: {
    verifyCode: (code, verificationId) => dispatch(checkVerificationCode(code, verificationId)),
    toggleLoading: () => dispatch(toggleLoading()),
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(OTPVerifyScreen);
