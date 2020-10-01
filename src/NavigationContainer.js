import 'react-native-gesture-handler';
import React from 'react';

import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from './screens/DashboardScreen';
// import SplashScreen from './src/screens/SplashScreen';
// import SignupScreenTwo from './src/screens/SignupScreenTwo';
// import AccountScreen from './src/screens/AccountScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from './screens/ProfileScreen';
// import PaymentScreen from './screens/PaymentScreen';
import { NavigationContainer } from '@react-navigation/native';
import AccountScreen from './screens/AccountScreen';
import PaymentScreen from './screens/PaymentScreen';
import NotficationScreen from './screens/NotificationScreen';


// import SignupScreen from './src/screens/SignupScreen';
// import SigninScreen from './src/screens/SigninScreen';

const Navigation = ({navigation}) => {
   
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const DashboardTab=()=>{
      return(
          <Tab.Navigator>
          <Tab.Screen name="Dashboard" component={DashboardScreen}/>
          <Tab.Screen name="Profile" component={ProfileScreen}/>
          <Tab.Screen name="Account" component={AccountScreen}/>

          </Tab.Navigator>
      )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          headerStyleInterpolator: HeaderStyleInterpolators.forSlideRight,
        }}>
            
        {/* <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}} /> */}
        {/* <Stack.Screen name="Signin" component={SigninScreen} options={{headerShown:false}}/> */}
        {/* <Stack.Screen name="SignUpp" component={SignupScreenTwo} /> */}

        {/* <Stack.Screen name="Signin" component={SigninScreen}/> */}

        <Stack.Screen
          name="Dashboard"
          component={DashboardTab}
          options={({navigation, route})=>({
            title: 'ADDRESS',
            headerTintColor: 'green',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <MaterialCommunityIcons
               name="account-circle-outline"
               size={30}
               style={{padding:10}}
                onPress={() =>navigation.navigate('Profile')}
              />
            ),
            headerTitleAlign: 'center',
          })}
        />

        <Stack.Screen 
       name="Account"
       component={AccountScreen}
       options={{
         title:"Account",
         headerTintColor:'green',
         headerTitleStyle:{
           fontWeight:'bold'
         },
         headerTitleAlign:'left'
       }}
     />


        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            headerTintColor: 'green',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />
     <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{
            title: 'Payment',
            headerTintColor: 'green',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />
     <Stack.Screen
          name="Notification"
          component={NotficationScreen}
          options={{
            title: 'Notification',
            headerTintColor: 'green',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
