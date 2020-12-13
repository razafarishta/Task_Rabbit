import React, {useEffect} from 'react';
import {FlatList, Text, View, Dimensions} from 'react-native';
import {Card} from 'react-native-paper';
import {color} from 'react-native-reanimated';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
// import { Card } from '../components/Card';
const {height, width, fontScale} = Dimensions.get('window');

const OrderHistoryScreen = (props) => {
  // console.log('Order History Screen', props);
  // useEffect(() => {
  //   props.OrderHistory();
  // }, []);
  // useEffect(() => {
  //   props.DeliveryOrderHistory();
  // }, []);
  return (
    <View style={{flex: 1, padding: 15}}>
      <Card
        onPress={() => props.navigation.navigate('Car Bookings')}
        style={{
          height: 50,
          width: width / 1.1,
          alignSelf: 'center',
          padding: 2,
        }}>
        <View
          style={{
            // justifyContent: 'center',
            alignItems: 'center',

            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 12,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'green',
            }}>
            Car Service History
          </Text>
          <SimpleLineIcons
            name="arrow-right"
            size={18}
            style={{fontWeight: 'bold'}}
          />
        </View>
      </Card>

      <Card
        onPress={() => props.navigation.navigate('Delivery Bookings')}
        style={{
          height: 50,
          width: width / 1.1,

          alignSelf: 'center',
          marginTop: 15,
          padding: 2,
        }}>
        <View
          style={{
            // justifyContent: 'center',
            alignItems: 'center',

            flexDirection: 'row',
            justifyContent: 'space-between',
            // paddingTop: 12,
            padding: 12,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'green',
            }}>
            Delivery Service History
          </Text>
          <SimpleLineIcons
            name="arrow-right"
            size={18}
            style={{fontWeight: 'bold'}}
          />
        </View>
      </Card>

      <Card
        onPress={() => props.navigation.navigate('Resturant Delivery')}
        style={{
          height: 50,
          width: width / 1.1,
          alignSelf: 'center',
          marginTop: 15,
          padding: 2,
        }}>
        <View
          style={{
            // justifyContent: 'center',
            alignItems: 'center',

            flexDirection: 'row',
            justifyContent: 'space-between',
            // paddingTop: 12,
            padding: 12,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'green',
            }}>
            Food Service History
          </Text>
          <SimpleLineIcons
            name="arrow-right"
            size={18}
            style={{fontWeight: 'bold'}}
          />
        </View>
      </Card>

      <Card
        onPress={() => props.navigation.navigate('Grocery Delivery')}
        style={{
          height: 50,
          width: width / 1.1,
          alignSelf: 'center',
          marginTop: 15,
          padding: 2,
        }}>
        <View
          style={{
            // justifyContent: 'center',
            alignItems: 'center',

            flexDirection: 'row',
            justifyContent: 'space-between',
            // paddingTop: 12,
            padding: 12,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'green',
            }}>
            Food Service History
          </Text>
          <SimpleLineIcons
            name="arrow-right"
            size={18}
            style={{fontWeight: 'bold'}}
          />
        </View>
      </Card>
      {/* <FlatList
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
      /> */}
      {/* <Text>
            Your Order History is Empty
        </Text> */}
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

export default OrderHistoryScreen;
