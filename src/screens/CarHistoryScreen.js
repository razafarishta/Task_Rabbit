import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import {connect} from 'react-redux';
import {Button} from 'react-native-elements';
import {OrderHistory} from '../actions/OrderAction';
// import { Card } from '../components/Card';

const CarHistoryScreen = (props) => {
  console.log('Car Order History Screen', props);
  console.log('order', props.orderr);
  const currentOrder = props.orderr.find((v) => v.orderId);
  console.log(currentOrder, 'current Order');
  useEffect(() => {
    props.OrderHistory();
  }, []);
  return (
    <View style={{flex: 1, padding: 15}}>
      {props.orderr.length > 0 ? (
        <FlatList
          data={props.orderr}
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
                    <Text style={{fontWeight: 'bold'}}>{item.pickup}</Text>
                    <Text style={{}}>Rs 275 </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'column', paddingLeft: 10}}>
                      <Text>{item.dropoff}</Text>
                      <Text>{item.passenger}</Text>
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
          <Text style={{fontSize: 16}}>You Car Order History is Empty</Text>
        </View>
      )}

      {/* <Card>
            <View style={{padding:10, flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontWeight:'bold'}}>Burger Lab - SMCHS</Text>
            <Text style={{}}>Rs 275 </Text>
            <View style={{flexDirection:'column'}}>
            <Text>zabardast </Text>
            </View>
            </View>
           
        </Card> 
        
       <Card style={{marginTop:11}}>
            <View style={{flexDirection:'column',}}>
        <View style={{padding:10, flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{fontWeight:'bold'}}>Burger Lab - SMCHS</Text>
        <Text style={{}}>Rs 275 </Text>
        

        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'column', paddingLeft:10}}> 
        <Text>Zabardast Deal 1</Text>
        <Text>2020-10-09 21:31</Text>

        </View>
      <Button 
        buttonStyle={{backgroundColor:'#1ec31e', height:38,width:90, marginBottom:15, marginRight:5}}
        title="Reorder"
      />
        </View>

     
        </View>
        </Card>
    

        <Card style={{marginTop:11}}>
            <View style={{flexDirection:'column'}}>
        <View style={{padding:10, flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{fontWeight:'bold'}}>Burger Lab - SMCHS</Text>
        <Text style={{}}>Rs 275 </Text>
        

        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'column', paddingLeft:10}}> 
        <Text>Zabardast Deal 1</Text>
        <Text>2020-10-09 21:31</Text>

        </View>
      <Button 
        buttonStyle={{backgroundColor:'#1ec31e', height:38,width:90, marginBottom:15, marginRight:5}}
        title="Reorder"
      />
        </View>

     
        </View>
        </Card>

        <Card style={{marginTop:11}}>
            <View style={{flexDirection:'column'}}>
        <View style={{padding:10, flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{fontWeight:'bold'}}>Burger Lab - SMCHS</Text>
        <Text style={{}}>Rs 275 </Text>
        

        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'column', paddingLeft:10}}> 
        <Text>Zabardast Deal 1</Text>
        <Text>2020-10-09 21:31</Text>

        </View>
      <Button 
        buttonStyle={{backgroundColor:'#1ec31e', height:38,width:90, marginBottom:15, marginRight:5}}
        title="Reorder"
      />
        </View>

     
        </View>
        </Card>
        <Card style={{marginTop:11}}>
            <View style={{flexDirection:'column'}}>
        <View style={{padding:10, flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{fontWeight:'bold'}}>Burger Lab - SMCHS</Text>
        <Text style={{}}>Rs 275 </Text>
        

        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'column', paddingLeft:10}}> 
        <Text>Zabardast Deal 1</Text>
        <Text>2020-10-09 21:31</Text>

        </View>
      <Button 
        buttonStyle={{backgroundColor:'#1ec31e', height:38,width:90, marginBottom:15, marginRight:5}}
        title="Reorder"
      />
        </View>

     
        </View>
        </Card> */}
    </View>
  );
};
const mapStateToProps = ({auth, order}) => {
  const {user} = auth;
  const {orderr} = order;

  return {
    user,
    orderr,
    // delivery,
  };
};
export default connect(mapStateToProps, {OrderHistory})(CarHistoryScreen);
