import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { checkVerificationCode } from '@store/actions/auth';


const OTPVerifyScreen = ({ state, dispatcher }) => {
  const [code, setCode] = useState(null);
  console.log('STATE', state)
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
          dispatcher.verifyCode(code, state.verificationId);
          console.log('DONE');
        }}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  state: {
    verificationId: state.auth.verificationId,
  },
});

const mapDispatchToProps = dispatch => ({
  dispatcher: {
    verifyCode: (code, verificationId) => dispatch(checkVerificationCode(code, verificationId)),
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(OTPVerifyScreen);
