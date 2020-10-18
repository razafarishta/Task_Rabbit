import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import {connect} from 'react-redux';
import {Button} from 'react-native-elements';
import {FoodOrderHistory} from '../actions/OrderAction';
// import { Card } from '../components/Card';

const FoodHistoryScreen = (props) => {
  console.log('Food Order History Screen', props);
  useEffect(() => {
    props.FoodOrderHistory();
  }, []);
  return (
    <View style={{flex: 1, padding: 15}}>
      <FlatList
        data={props.food}
        keyExtractor={(item) => item.orderId}
        renderItem={({item}) => {
          return (
            <Card style={{marginTop: 11}}>
              <View style={{flexDirection: 'column'}}>
                <View
                  style={{
                    padding: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>{item.resturant}</Text>
                  <Text style={{}}>Rs 275 </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'column', paddingLeft: 10}}>
                    <Text>{item.item}</Text>
                    <Text>{item.dropoff}</Text>
                  </View>
                  <Button
                    buttonStyle={{
                      backgroundColor: '#1ec31e',
                      height: 40,
                      width: 140,
                      marginBottom: 15,
                      marginRight: 5,
                    }}
                    // color="#1ec31e"
                    title="Order Completed"
                  />
                </View>
              </View>
            </Card>
          );
        }}
      />
    </View>
  );
};
const mapStateToProps = ({auth, order}) => {
  const {user} = auth;
  const {food} = order;

  return {
    user,
    food,
    // delivery,
  };
};
export default connect(mapStateToProps, {FoodOrderHistory})(FoodHistoryScreen);
