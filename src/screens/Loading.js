import React from 'react';
import {View, ActivityIndicator, BackHandler} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
// import {UpdateUser} from '../../store/actions/authActions';

const Loading = (props) => {
  React.useEffect(() => {
    // console.log('userrr', props.user);
    if (!props.user) {
      AsyncStorage.getItem('userData').then((response) => {
        if (response) {
          response = JSON.parse(response);
          if (response) {
            props.navigation.navigate('Root', {screen: 'Dashboard'});
          }
        } else {
          props.navigation.navigate('Auth');
        }
      });
    }
   

  }, [props.user]);
  return (
    <View style={{justifyContent: 'center', flex: 1}}>
      <ActivityIndicator size="small" color="green" />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};


export default connect(mapStateToProps)(Loading);