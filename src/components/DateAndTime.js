
import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
 
const DateAndTime = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
 
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
 
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
 
  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
 
  return (
    <View>
      <Button title="Select Date and Time" onPress={showDatePicker} style={{backgroundColor:'green', width:20}} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};
 
export default DateAndTime;