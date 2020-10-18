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
import {
  resturantChanged,
  itemChanged,
  quantityChanged,
  foodDelivery,
  dropoffChanged,
  instructionChanged,
} from '../actions/FoodActions';
import {connect} from 'react-redux';
import Input from '../components/Input';
const {height, width, fontScale} = Dimensions.get('window');

const FoodDeliveryScreen = (props) => {
  const [pressed, setPressed] = useState(false);
  const onpressedButon = () => {
    setPressed(true);
  };

  const onResturantChange = (text) => {
    props.resturantChanged(text);
  };

  const onItemChange = (text) => {
    props.itemChanged(text);
  };
  const onQuantityChange = (text) => {
    props.quantityChanged(text);
  };

  const onDropoffChange = (text) => {
    props.dropoffChanged(text);
  };

  const onInstructionChange = (text) => {
    props.instructionChanged(text);
  };

  const onButtonPress = () => {
    const {
      resturant,
      item,
      quantity,
      dropoff,
      instruction,
      response,
      navigation,
    } = props;
    props.foodDelivery(
      {
        resturant,
        item,
        quantity,
        dropoff,
        instruction,
        response,
      },
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
            placeholder="Resturant Name"
            label="Resturant Name : "
            onChangeText={(resturant) => {
              onResturantChange(resturant);
            }}
            value={props.resturant}
          />
        </Card>
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
              props.resturant,
              props.item,
              props.quantity,
              props.dropoff,
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

const mapStateToProps = ({food}) => {
  const {
    resturant,
    item,
    quantity,
    pickup,
    dropoff,
    instruction,
    response,
  } = food;
  return {
    resturant,
    item,
    quantity,
    pickup,
    dropoff,
    instruction,
    response,
  };
};
export default connect(mapStateToProps, {
  resturantChanged,
  itemChanged,
  quantityChanged,
  dropoffChanged,
  instructionChanged,
  foodDelivery,
})(FoodDeliveryScreen);
