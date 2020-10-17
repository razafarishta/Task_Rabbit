import React, {useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
// import { State } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {orderData} from '../actions/AdminActions';
const AdminScreen = (props) => {
  console.log(props);
  useEffect(() => {
    props.orderData();
  });
  // const handleSignin =()=>{

  //     const {navigation, signin,email,password} = props;

  //     signin({email,password},navigation)
  // }
  return (
    <View>
      <FlatList
        data={props.allData}
        keyExtractor={(item) => item.userId}
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
