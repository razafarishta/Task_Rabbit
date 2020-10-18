import React from 'react';
import {Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {cancelOrder} from '../actions/PendingAction';
import {showMessage} from 'react-native-flash-message';
const pendingScreen = (props) => {
  console.log('pending', props);
  const onButtonPress = () => {
    const {navigation} = props;
    props.cancelOrder(navigation);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#1ec31e'}}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <LottieView
          source={require('../assets/pending.json')}
          autoPlay
          loop
          style={{
            width: '100%',
            height: 400,
            // backgroundColor: '#1ec31e',
          }}></LottieView>
        <Text
          style={{
            textAlign: 'center',
            justifyContent: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: 60,
          }}>
          Your Order is Pending
        </Text>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16,
            paddingBottom: 10,
          }}>
          Want to cancel the order?
        </Text>
        <Button
          type="outline"
          buttonStyle={{
            backgroundColor: '#fff',
            marginBottom: 20,
          }}
          onPress={() => {
            onButtonPress();
            showMessage({
              message: 'Your Order is been Cancelled.Thanks for coming',
              type: 'default',
              backgroundColor: 'blue',
              color: '#fff',
              // hideOnPress=true
            });
          }}
          titleStyle={{
            color: 'green',
          }}
          title="Cancel"
        />
        <Button
          type="outline"
          buttonStyle={{
            backgroundColor: '#fff',
            borderColor: 'green',
          }}
          titleStyle={{
            color: 'green',
          }}
          title="Want to Avail Taskrabbit more"
          onPress={() =>
            props.navigation.navigate('Root', {screen: 'Dashboard'})
          }
        />
      </View>
    </View>
  );
};
export default connect(null, {cancelOrder})(pendingScreen);
