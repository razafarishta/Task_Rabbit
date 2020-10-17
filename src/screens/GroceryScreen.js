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
const {height, width, fontScale} = Dimensions.get('window');

const GroceryScreen = () => {
  const [pressed, setPressed] = useState(false);
  const onpressedButon = () => {
    setPressed(true);
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled">
        <Card>
          <Input placeholder="Resturant Name" label="Resturant Name : " />
        </Card>
        <Card>
          <Input placeholder="Order" label="Item Name : " />
          <Input placeholder="no of item(S)" label="Quantity" />

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
          <Input placeholder="Address" label="Your Address : " />
          <Input placeholder="Any Instruction" label="Instruction : " />
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
          }}>
          <Text style={{color: '#fff', fontSize: 16}}>Done</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default GroceryScreen;
