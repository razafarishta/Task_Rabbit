import React from 'react';
import { View } from 'react-native';
import DateAndTime from '../components/DateAndTime';
import LocationSearch from '../components/locationSearch';


const CarRideScreen =()=>{
    return(
        <View style={{flex:1}}>
            <LocationSearch />
            <DateAndTime />
        </View>
    )
}
export default CarRideScreen;