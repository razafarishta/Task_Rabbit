import React, {useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import {Card} from 'react-native-paper';
// import { State } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {orderData} from '../actions/AdminActions';
const {height, width, fontScale} = Dimensions.get('window');

const AdminScreen = (props) => {
  // useEffect(() => {
  //   props.orderData();
  // }, []);
  // const handleSignin =()=>{

  //     const {navigation, signin,email,password} = props;

  //     signin({email,password},navigation)
  // }
  return (
    <View style={{flex: 1, padding: 10}}>
      {/* <FlatList
        data={props.allData}
        keyExtractor={(item) => item.orderId}
        renderItem={({item}) => {
          console.log('item', item);
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

      <Card
        // onPress={() => props.navigation.navigate('CarOrder')}
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
            Car Service Orders
          </Text>
          <SimpleLineIcons
            name="arrow-right"
            size={18}
            style={{fontWeight: 'bold'}}
          />
        </View>
      </Card>

      <Card
        onPress={() => props.navigation.navigate('GoodOrder')}
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
            Goods Delivery Service History
          </Text>
          <SimpleLineIcons
            name="arrow-right"
            size={18}
            style={{fontWeight: 'bold'}}
          />
        </View>
      </Card>

      <Card
        onPress={() => props.navigation.navigate('FoodOrder')}
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
            Food Service History
          </Text>
          <SimpleLineIcons
            name="arrow-right"
            size={18}
            style={{fontWeight: 'bold'}}
          />
        </View>
      </Card>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    allData: state.order.allData,
  };
};

export default connect(mapStateToProps, {orderData})(AdminScreen);
