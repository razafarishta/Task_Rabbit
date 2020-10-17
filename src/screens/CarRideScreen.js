import React from 'react';
import {
  TextInput,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import DateAndTime from '../components/DateAndTime';
// import Details from '../components/Details';
import {Card} from '../components/Card';

import Input from '../components/Input';
import LocationSearch from '../components/locationSearch';
import {connect} from 'react-redux';
import {
  pickupChanged,
  dropoffChanged,
  dateChanged,
  timeChanged,
  passengerChanged,
  instructionChanged,
  carRide,
} from '../actions/CarActions';
const {height, width, fontScale} = Dimensions.get('window');

const CarRideScreen = (props) => {
  const onPickupChange = (text) => {
    props.pickupChanged(text);
  };

  const onDropoffChange = (text) => {
    props.dropoffChanged(text);
  };

  const onDateChange = (text) => {
    props.dateChanged(text);
  };
  const onTimeChange = (text) => {
    props.timeChanged(text);
  };
  const onPassengerChange = (text) => {
    props.passengerChanged(text);
  };
  const onInstructionChange = (text) => {
    props.instructionChanged(text);
  };
  const onButtonPress = () => {
    const {
      pickup,
      dropoff,
      date,
      passenger,
      time,
      instruction,
      response,
      navigation,
    } = props;
    props.carRide(
      {pickup, dropoff, date, time, passenger, instruction, response},
      navigation,
    );
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled">
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
        <Card>
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
        </Card>
        <Card>
          <Input
            placeholder="Date"
            label="Date : "
            onChangeText={(date) => {
              onDateChange(date);
            }}
            value={props.date}
          />
          <Input
            placeholder="Time"
            label="Time : "
            onChangeText={(time) => {
              onTimeChange(time);
            }}
            value={props.time}
          />
        </Card>
        {/* <DateAndTime
                onChange={(date) => {onDateChange(date)}}
                onConfirm ={(date)=> {onDateChange(date)}}
                value={props.date}
            /> */}
        {/* <Details
                passengerlabel="No of passenger(s) : "
                instructionlabel="Instructions : "
                passengerplaceholder="no of passengers"
                instructionplaceholder="Any instructions"
            /> */}
        <Card>
          <Input
            placeholder="No of passenger(s)"
            label="No of Passenger(s) : "
            onChangeText={(passenger) => {
              onPassengerChange(passenger);
            }}
            value={props.passenger}
          />
        </Card>
        <Card>
          <Input
            placeholder="Any Instructions"
            label="Instructions : "
            onChangeText={(instruction) => {
              onInstructionChange(instruction);
            }}
            value={props.instruction}
          />
        </Card>
        <TouchableOpacity
          style={{
            backgroundColor: '#1ec31e',
            width: width / 1.5,
            height: 50,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
          onPress={() =>
            onButtonPress(
              props.pickup,
              props.dropoff,
              props.date,
              props.time,
              props.passenger,
              props.instruction,
              props.response,
            )
          }>
          <Text style={{color: '#fff', fontSize: 16}}>Done</Text>
        </TouchableOpacity>

        <Text style={{textAlign: 'center'}}>{props.response}</Text>
      </ScrollView>
    </View>
  );
};
const mapStateTopProps = ({car}) => {
  const {pickup, dropoff, date, time, passenger, instruction, response} = car;
  return {
    pickup,
    dropoff,
    date,
    time,
    passenger,
    instruction,
    response,
  };
};
export default connect(mapStateTopProps, {
  pickupChanged,
  dropoffChanged,
  passengerChanged,
  instructionChanged,
  dateChanged,
  timeChanged,
  carRide,
})(CarRideScreen);
