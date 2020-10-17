import React, {useEffect} from 'react';
import {
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  BackHandler,
} from 'react-native';
import {Text} from 'react-native-elements';
const {height, width, fontScale} = Dimensions.get('window');

const DashboardScreen = (props) => {
  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <View
          style={{
            marginTop: '44%',
            width: width,
            height: height / 4.7,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              borderColor: '#000',
              width: width / 2,
              height: height / 4.7,
              borderRadius: 0.5,
              // backgroundColor:'yellow',
              borderWidth: 0.5,

              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
            onPress={() => props.navigation.navigate('CarRide')}>
            <Image source={require('../assets/car.png')} />
            <Text style={{fontWeight: 'bold'}}>Car Ride</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Delivery')}
            style={{
              borderColor: '#000',
              width: width / 2,
              height: height / 4.7,

              borderRadius: 0.5,
              // backgroundColor:'yellow',
              borderWidth: 0.5,

              flexDirection: 'column',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <Image
              source={require('../assets/delivery.png')}
              style={{width: 120, height: 120}}
            />
            <Text style={{fontWeight: 'bold'}}>Delivery</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{width: width, height: height / 4.71, flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              borderColor: '#000',
              width: width / 2,
              height: height / 4.7,
              borderRadius: 0.5,
              // backgroundColor:'yellow',
              borderWidth: 0.5,

              flexDirection: 'column',
              alignItems: 'center',
              flexDirection: 'column',
            }}
            onPress={() => props.navigation.navigate('Grocery')}>
            <Image
              source={require('../assets/mart.png')}
              style={{height: 125}}
            />
            <Text style={{fontWeight: 'bold'}}>Mart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderColor: '#000',
              width: width / 2,
              height: height / 4.7,

              borderRadius: 0.5,
              // backgroundColor:'yellow',
              borderWidth: 0.5,

              flexDirection: 'column',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <Image
              source={require('../assets/classifieds.png')}
              style={{height: 125}}
            />
            <Text style={{fontWeight: 'bold'}}>Classifieds</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{width: width, height: height / 4.7, flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              borderColor: '#000',
              width: width / 2,
              height: height / 4.7,
              borderRadius: 0.5,
              // backgroundColor:'yellow',
              borderWidth: 0.5,

              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => props.navigation.navigate('Food')}>
            <Image
              source={require('../assets/food2.png')}
              style={{height: 125, width: 120}}
            />
            <Text style={{fontWeight: 'bold'}}>Food</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderColor: '#000',
              width: width / 2,
              height: height / 4.7,
              borderRadius: 0.5,
              // backgroundColor:'yellow',
              borderWidth: 0.5,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <Image
              source={require('../assets/medicine.png')}
              style={{height: 125, width: 120}}
            />

            <Text style={{fontWeight: 'bold'}}>Medicine</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;
