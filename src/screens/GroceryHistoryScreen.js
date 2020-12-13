import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import {connect} from 'react-redux';
import {Button} from 'react-native-elements';
import {GroceryOrderHistory} from '../actions/OrderAction';
// import { Card } from '../components/Card';

const GroceryHistoryScreen = (props) => {
  console.log('Gocery History Screen', props);
  useEffect(() => {
    props.GroceryOrderHistory();
  }, []);
  return (
    <View style={{flex: 1, padding: 15}}>
      {props.grocery.length > 0 ? (
        <FlatList
          data={props.grocery}
          keyExtractor={(item) => item.groceryorderId}
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
                    <Text style={{fontWeight: 'bold'}}>{item.dropoff}</Text>
                    <Text style={{}}>Rs 275 </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'column', paddingLeft: 10}}>
                      <Text>{item.item}</Text>
                      <Text>{item.quantity}</Text>
                    </View>
                    <Button
                      buttonStyle={{
                        backgroundColor: '#1ec31e',
                        height: 40,
                        width: 180,
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
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 16}}>You Grocery History is Empty</Text>
        </View>
      )}
    </View>
  );
};
const mapStateToProps = ({auth, order}) => {
  const {user} = auth;
  const {grocery} = order;

  return {
    user,
    grocery,
    // delivery,
  };
};
export default connect(mapStateToProps, {GroceryOrderHistory})(
  GroceryHistoryScreen,
);
