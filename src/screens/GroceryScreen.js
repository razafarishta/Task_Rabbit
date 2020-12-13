import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
// import {Card} from 'react-native-paper';
import {Card} from '../components/Card';
import Input from '../components/Input';
import {connect} from 'react-redux';
import {
  dropoffChanged,
  dateChanged,
  timeChanged,
  instructionChanged,
} from '../actions/CarActions';
import {itemChanged, quantityChanged} from '../actions/FoodActions';
import {groceryDelivery} from '../actions/GroceryActions';
const {height, width, fontScale} = Dimensions.get('window');

const GroceryScreen = (props) => {
  const [pressed, setPressed] = useState(false);
  const onpressedButon = () => {
    setPressed(true);
  };

  const onItemChange = (text) => {
    props.itemChanged(text);
  };
  const onQuantityChange = (text) => {
    props.quantityChanged(text);
  };
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
    const {
      item,
      quantity,
      dropoff,
      date,
      instruction,
      response,
      navigation,
    } = props;
    props.groceryDelivery(
      {item, quantity, dropoff, date, instruction, response},
      navigation,
    );
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled">
        <Card>
          <Input
            placeholder="Order"
            label="Item Name : "
            onChangeText={(item) => {
              onItemChange(item);
            }}
            value={props.item}
          />
          <Input
            placeholder="no of item(S)"
            label="Quantity"
            onChangeText={(quantity) => {
              onQuantityChange(quantity);
            }}
            value={props.quantity}
          />

          <TouchableOpacity
            onPress={onpressedButon}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#1ec31e',
              height: 35,
              width: '60%',
              alignSelf: 'center',
              marginBottom: 15,
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Add Item</Text>
          </TouchableOpacity>
          {pressed ? (
            <View>
              <Input placeholder="Order" label="Item Name" />
              <Input placeholder="no of item(S)" label="Quantity" />
            </View>
          ) : null}
        </Card>
        <Card>
          <Input
            placeholder="Address"
            label="Your Address : "
            onChangeText={(dropoff) => {
              onDropoffChange(dropoff);
            }}
            value={props.dropoff}
          />
          <Input
            placeholder="Any Instruction"
            label="Instruction : "
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
            marginTop: 15,
            marginBottom: 15,
          }}
          onPress={() =>
            onButtonPress(
              props.dropoff,
              props.item,
              props.quantity,
              props.instruction,
            )
          }>
          <Text style={{color: '#fff', fontSize: 16}}>Done</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = ({grocery}) => {
  const {item, quantity, dropoff, instruction} = grocery;
  return {
    item,
    quantity,
    dropoff,
    instruction,
  };
};
export default connect(mapStateToProps, {
  quantityChanged,
  itemChanged,
  dropoffChanged,
  instructionChanged,
  dateChanged,
  groceryDelivery,
})(GroceryScreen);
