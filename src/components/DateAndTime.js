
import React, { useState } from "react";
import { Button, View, Dimensions, TouchableOpacity,Text } from "react-native";
import {connect} from 'react-redux'
import {dateChanged} from '../actions/CarActions'
import DateTimePickerModal from "react-native-modal-datetime-picker";
const {height, width, fontScale} = Dimensions.get('window');
 
const DateAndTime = ({value, onChange,props}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // const [date, setDate ]  =useState('')
 const[dateDisplay, setDateDisplay]= useState('')
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
 
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
 
  const handleConfirm = () => {
    // console.warn("A date has been picked: ", date);
    props.dateChanged(props.date)
    // setDateDisplay({dateDisplay:date.toUTCString()})
    // console.log(date)
    hideDatePicker();
  };
  // const setDate=(event, date)=>{
  //   setDate(date)
  // }
 
  return (
    <View 
    style={{
      paddingTop:width/8,
     width:width/2, 
     justifyContent:'center', 
     alignItems:'center', 
     alignSelf:'center', 
    //  backgroundColor:'green',
     }}>
      {/* <Button title="Select Date and Time" onPress={showDatePicker} style={{backgroundColor:'green'}}/> */}
      <TouchableOpacity 
      style={{
        backgroundColor:'#1ec31e',
         width:width/1.5,
          height:50,
           alignItems:'center'
           ,justifyContent:'center'
           }} 
          //  onPress={showDatePicker}
           onPress={()=>handleConfirm()}
           >
        <Text style={{color:"#fff", fontWeight:'bold'}}>Select Date and Time</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        onChange={(date)=>{onChange(date)}}
        // value={value}
        // value={props.date}

      />
    </View>
  );
};
const mapStateToProps = (state)=>{
  return{
    date:state.car.date
  }
}
 
export default connect(mapStateToProps, {dateChanged})(DateAndTime);