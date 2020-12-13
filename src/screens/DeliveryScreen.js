import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import DateAndTime from '../components/DateAndTime';
import LocationSearch from '../components/locationSearch';
import Input from '../components/Input';
import {connect} from 'react-redux';
import {
  pickupChanged,
  dropoffChanged,
  dateChanged,
  timeChanged,
  instructionChanged,
} from '../actions/CarActions';
import {goodDelivery} from '../actions/DeliveryActions';
import {ScrollView} from 'react-native-gesture-handler';

const {height, width, fontScale} = Dimensions.get('window');

const DeliveryScreen = (props) => {
  const onPickupChange = (text) => {
    props.pickupChanged(text);
  };

  const onDropoffChange = (text) => {
    props.dropoffChanged(text);
  };

  const onDateChange = (text) => {
    props.dateChanged(text);
    console.log(props);
  };
  const onTimeChange = (text) => {
    props.timeChanged(text);
  };

  const onInstructionChange = (text) => {
    props.instructionChanged(text);
  };
  const onButtonPress = () => {
    const {pickup, dropoff, date, instruction, response, navigation} = props;
    props.goodDelivery(
      {pickup, dropoff, date, instruction, response},
      navigation,
    );
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled">
        <Input
          placeholder="PICK UP"
          label="PICK UP : "
          onChangeText={(pickup) => {
            onPickupChange(pickup);
          }}
          value={props.pickup}
        />
        <Input
          placeholder="DROP OFF"
          label="DROP OFF : "
          onChangeText={(dropoff) => {
            onDropoffChange(dropoff);
          }}
          value={props.dropoff}
        />

        {/* <LocationSearch 
                label="Pick Up"
                onChangeText={(pickup)=>{onPickupChange(pickup)}}
                value={props.pickup}
            />

            <LocationSearch 
                label="Destination"
                onChangeText={(dropoff)=>{onDropoffChange(dropoff)}}
                value={props.dropoff}
            /> */}
        <DateAndTime
          value={props.date}
          onConfirm={(date) => {
            onDateChange(date);
          }}
        />
        {/* <Details
            passengerlabel="No of passenger(s) : "
            instructionlabel="Instructions : "
            passengerplaceholder="no of passengers"
            instructionplaceholder="Any instructions"
        /> */}

        <Input
          placeholder="Any Instructions"
          label="Instructions : "
          onChangeText={(instruction) => {
            onInstructionChange(instruction);
          }}
          value={props.instruction}
        />

        <TouchableOpacity
          style={{
            backgroundColor: '#1ec31e',
            width: width / 1.5,
            height: 50,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() =>
            onButtonPress(
              props.pickup,
              props.dropoff,
              props.date,
              props.instruction,
              props.response,
            )
          }>
          <Text style={{color: '#fff', fontSize: 16}}>Done</Text>
        </TouchableOpacity>

        <Text>{props.response}</Text>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = ({delivery}) => {
  const {pickup, dropoff, date, time, instruction, response} = delivery;
  return {
    pickup,
    dropoff,
    date,
    time,

    instruction,
    response,
  };
};
export default connect(mapStateToProps, {
  pickupChanged,
  dropoffChanged,
  instructionChanged,
  dateChanged,
  goodDelivery,
})(DeliveryScreen);
