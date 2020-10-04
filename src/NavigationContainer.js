import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {connect} from 'react-redux';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from './screens/DashboardScreen';
// import SplashScreen from './src/screens/SplashScreen';
import SignupScreen from './screens/SignupScreen'
import SignupScreenTwo from './screens/SignupScreenTwo';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProfileScreen from './screens/ProfileScreen';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import SigninScreen from './screens/SigninScreen'
import AccountScreen from './screens/AccountScreen';
import PaymentScreen from './screens/PaymentScreen';
import NotficationScreen from './screens/NotificationScreen';
import { Image,Dimensions } from 'react-native';
import AddressScreen from './screens/AddressScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import SearchScreen from './screens/SearchScreen';
// import {loginUser} from '../actions/AuthActions'



// import SignupScreen from './src/screens/SignupScreen';

const { height, width, fontScale } = Dimensions.get('window');


const Navigation = (props) => {
  //  const isLogge
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  // const [isAuthenticated, setIsAuthenticated] = useState(false)
  const DashboardTab=()=>{
      return(
          <Tab.Navigator tabBarOptions={{showIcon:true, showLabel:false}}
              
         >
          <Tab.Screen 
            name="Dashboard" 

            component={DashboardScreen}
            
            options={{
              title:'Address',
                tabBarIcon:()=>(
                    <AntDesign name="home" size={30}/>
                ),
                
            
            }}
            />
          <Tab.Screen 
            name="OrderHistory" 
            
            component={OrderHistoryScreen}
            options={{
              title:'Orders History',
                tabBarIcon:()=>(
                    <Image source={require('./assets/order.png')}/>
                )
            }}
            />
          <Tab.Screen 
            name="search" 
            component={SearchScreen} 
            size={30}
            
            options={{
              title:'Search Screen',
                tabBarIcon:()=>(
                   <AntDesign name="search1" size={30}/>
                )
            }}/>

          </Tab.Navigator>
      )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Signin"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          headerStyleInterpolator: HeaderStyleInterpolators.forSlideRight,
        }}>
            
        {/* <Stack.Screen name="Signup" component={SignupScreen}/>
        <Stack.Screen name="SignUpp" component={SignupScreenTwo} />
        <Stack.Screen name="Signin" component={SigninScreen} options={{headerShown:false}}/> */}
        {props.isLoggedIn ? (
          <>
        <Stack.Screen
          name="Dashboard"
          component={DashboardTab}
          options={({navigation, route})=>({
            //   title:getHeaderTitle(route),
            title:'ADDRESS',
            headerTitle:getFocusedRouteNameFromRoute(route),
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


            headerRight:()=>(
                <Entypo 
                    name="chevron-down"
                    size={20}
                    style={{paddingRight:width/3.2}}
                    onPress={()=>navigation.navigate('Address')}
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
          <Stack.Screen
          name="Address"
          component={AddressScreen}
          options={{
            title: 'Addresses',
            headerTintColor: 'green',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}

          
        />
        </>
            ) : (
              <>
        <Stack.Screen name="Signin" component={SigninScreen} options={{headerShown:false}}/>

{/* <Stack.Screen name="Signup" component={SignupScreen}/> */}
        <Stack.Screen name="SignUpp" component={SignupScreenTwo} />
        {/* <Stack.Screen name="Signin" component={SigninScreen} options={{headerShown:false}}/> */}
          
          {/* <Stack.Screen
          name="OrderHistory"
          component={OrderHistoryScreen}
          options={{
            title: 'Order History',
            
            headerTintColor: 'green',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        /> */}

        {/* <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: 'Search',
            
            headerTintColor: 'green',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        /> */}
        </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = ({auth})=>{
  const{isLoggedIn}=auth
  return{
    isLoggedIn
  }
}

export default connect(mapStateToProps)(Navigation);
