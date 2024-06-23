import React, {memo} from 'react';
import {StyleSheet, GestureResponderEvent} from 'react-native';
import {Button} from 'react-native-paper';

const PrimaryButton = memo(
  ({title, onPress, loading, disabled, style, contentStyle, labelStyle}) => {
    return (
      <Button
        style={[styles.loadingButton, style]}
        mode="outlined"
        dark
        onPress={onPress}
        disabled={disabled ? disabled : loading}
        loading={loading}
        labelStyle={[styles.labelStyle, labelStyle]}
        contentStyle={[styles.loginContent, contentStyle]}>
        {title}
      </Button>
    );
  },
);

const styles = StyleSheet.create({
  labelStyle: {
    textAlign: 'center',
    fontSize: 17,
    paddingTop: 1,
    fontFamily: 'Poppins_SemiBold',
    alignSelf: 'center',
    color: '#fff',
  },
  loginContent: {
    paddingHorizontal: 5,
    height: 40,
    justifyContent: 'center',
  },
  loadingButton: {
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 7,
    borderWidth: 0,
    backgroundColor: '#008B8B',
  },
});

export default PrimaryButton;
