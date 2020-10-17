import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';

const Input = ({value, onChangeText, placeholder, secureTextEntry, label}) => {
  const {inputStyle, labelStyle, containerStyle} = styles;
  return (
    <View style={{width: '80%', padding: 10}}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={styles.inputBox}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    width: 300,
    backgroundColor: '#eeeeee',
    borderRadius: 15,
    paddingHorizontal: 16,
    fontSize: 16,
    //color: '#002f6c',
    marginVertical: 10,
    backgroundColor: '#ffffff',
  },

  labelStyle: {
    fontSize: 16,
    paddingLeft: 10,
    fontWeight: 'bold',
    color: 'green',
    // flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Input;
