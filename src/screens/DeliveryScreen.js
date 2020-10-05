import React from 'react';
import { View } from 'react-native';
import DateAndTime from '../components/DateAndTime';
import LocationSearch from '../components/locationSearch';


const DeliveryScreen =()=>{
    return(
        <View style={{flex:1}}>
            <LocationSearch />
            <DateAndTime />
        </View>
    )
}
export default DeliveryScreen;