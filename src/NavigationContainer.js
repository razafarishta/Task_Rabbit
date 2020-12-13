import 'react-native-gesture-handler';
import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from './screens/DashboardScreen';
import SignupScreen from './screens/SignupScreen';
import SignupScreenTwo from './screens/SignupScreenTwo';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProfileScreen from './screens/ProfileScreen';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import SigninScreen from './screens/SigninScreen';
import AccountScreen from './screens/AccountScreen';
import PaymentScreen from './screens/PaymentScreen';
import NotficationScreen from './screens/NotificationScreen';
import {Image, Dimensions} from 'react-native';
import AddressScreen from './screens/AddressScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import SearchScreen from './screens/SearchScreen';
import CarRideScreen from './screens/CarRideScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import SplashScreen from './screens/SplashScreen';
import Loading from './screens/Loading';
import PhoneNoScreen from './screens/PhoneNoScreen';
import FoodDeliveryScreen from './screens/FoodDeliveryScreen';
import AdminScreen from './screens/AdminScreen';
import ForgetPassword from './screens/ForgetPassword';
import pendingScreen from './screens/PendingScreen';
import GroceryScreen from './screens/GroceryScreen';
import CarHistoryScreen from './screens/CarHistoryScreen';
import DeliveryHistoryScreen from './screens/DeliveryHistoryScreen';
import FoodHistoryScreen from './screens/FoodHistoryScreen';
import GroceryHistoryScreen from './screens/GroceryHistoryScreen';
import CarOrders from './screens/CarOrders';
import {goodDelivery} from './actions/DeliveryActions';
import GroceryOrders from './screens/GroceryOrders';
import FoodOrders from './screens/FoodOrders';

const {height, width, fontScale} = Dimensions.get('window');

const Navigation = (props) => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const DashboardTab = () => {
    return (
      <Tab.Navigator tabBarOptions={{showIcon: true, showLabel: true}}>
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: 'Address',
            tabBarIcon: () => <AntDesign name="home" size={30} />,
          }}
        />
        <Tab.Screen
          name="OrderHistory"
          component={OrderHistoryScreen}
          options={{
            title: 'Orders History',
            tabBarIcon: () => <Image source={require('./assets/order.png')} />,
          }}
        />
        <Tab.Screen
          name="search"
          component={SearchScreen}
          size={30}
          options={{
            title: 'Search Screen',
            tabBarIcon: () => <AntDesign name="search1" size={30} />,
          }}
        />
      </Tab.Navigator>
    );
  };
  function Auth() {
    return (
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Forget"
          component={ForgetPassword}
          options={{headerShown: false}}
        />

        {/* <Stack.Screen name="Signup" component={SignupScreen}/> */}
        <Stack.Screen name="SignUpp" component={SignupScreenTwo} />
        <Stack.Screen
          name="PhoneNo"
          component={PhoneNoScreen}
          options={{
            headerTitle: 'Phone Number',
          }}
        />
      </Stack.Navigator>
    );
  }
  function Dashboard() {
    const getHeaderTitle = (route) => {
      const routeName = getFocusedRouteNameFromRoute(route) ?? 'Dashboard';

      switch (routeName) {
        case 'Dashboard':
          return 'Your Address';
        case 'OrderHistory':
          return 'Order History';
        case 'search':
          return 'Search It';
      }
    };

    return (
      <Stack.Navigator>
        <Stack.Screen
          name="loading"
          component={Loading}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardTab}
          options={({navigation, route}) => ({
            //   title:getHeaderTitle(route),
            headerTitle: getHeaderTitle(route),
            headerTintColor: 'green',
            headerTitleStyle: {
              fontWeight: 'bold',
            },

            headerLeft: () => (
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={30}
                style={{padding: 10}}
                onPress={() => navigation.navigate('Profile')}
              />
            ),

            headerRight:
              getFocusedRouteNameFromRoute(route) !== 'search' &&
              getFocusedRouteNameFromRoute(route) !== 'OrderHistory'
                ? () => (
                    <Entypo
                      name="chevron-down"
                      size={20}
                      style={{
                        paddingRight: width / 3.7,
                        justifyContent: 'center',
                        paddingTop: 5,
                      }}
                      onPress={() => navigation.navigate('Address')}
                    />
                  )
                : false,
            headerTitleAlign: 'center',
          })}
        />
        <Stack.Screen
          name="Admin"
          component={AdminScreen}
          options={{
            headerShown: 'false',
            title: 'Admin',
            headerTintColor: 'green',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="CarRide"
          component={CarRideScreen}
          options={{
            headerShown: 'false',
            title: 'Car Ride',
            headerTintColor: 'green',
            headerTitleAlign: 'center',
          }}
        />

        <Stack.Screen
          name="Delivery"
          component={DeliveryScreen}
          options={{
            title: 'Delivery',
            headerTintColor: 'green',
            headerShown: 'false',

            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Food"
          component={FoodDeliveryScreen}
          options={{
            headerShown: 'false',
            title: 'Food',
            headerTintColor: 'green',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Grocery"
          component={GroceryScreen}
          options={{
            headerShown: 'false',
            title: 'Grocery',
            headerTintColor: 'green',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Pending"
          component={pendingScreen}
          options={{
            headerShown: null,
            // title: 'Pending',
            // headerTintColor: 'green',
            // headerTitleAlign: 'center',
          }}
        />

        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{
            title: 'Account',
            headerTintColor: 'green',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'left',
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
          name="OrderHistory"
          component={OrderHistoryScreen}
          options={{
            title: 'Orders',
            headerTintColor: 'green',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Car Bookings"
          component={CarHistoryScreen}
          options={{
            title: 'Car Bookings',
            headerTintColor: 'green',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Delivery Bookings"
          component={DeliveryHistoryScreen}
          options={{
            title: 'Delivery Bookings',
            headerTintColor: 'green',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />

        <Stack.Screen
          name="Resturant Delivery"
          component={FoodHistoryScreen}
          options={{
            title: 'Resturant Delivery',
            headerTintColor: 'green',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />

        <Stack.Screen
          name="Grocery Delivery"
          component={GroceryHistoryScreen}
          options={{
            title: 'Grocery Delivery',
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
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Signin"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          headerStyleInterpolator: HeaderStyleInterpolators.forSlideRight,
        }}>
        <Stack.Screen
          name="Root"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="CarOrder"
          component={CarOrders}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="GoodOrder"
          component={Deliver}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Grocer"
          component={GroceryOrders}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FoodOrder"
          component={FoodOrders}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
