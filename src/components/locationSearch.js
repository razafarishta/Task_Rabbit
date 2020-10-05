import React from 'react';
import { Text, View,Dimensions } from 'react-native';
// import { SearchBar } from 'react-native-elements';
// import { SearchBar } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
const { height, width, fontScale } = Dimensions.get('window');

const LocationSearch =()=>{

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return(
        <View style={{ padding:5, }}>
            <View style={{width:width, height:height/4,}}>
            <Text style={{fontSize:16, fontWeight:'bold', padding:5, color:'green'}}>
            Pickup Location
            </Text>
            <Searchbar 
                placeholder="Pickup Location"
                placeholderTextColor="green"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{width:width/1.03}}
            />

                <Text style={{fontWeight:'bold', fontSize:16, padding:5, color:"green"}}>
                        Dropoff Location
                    </Text>
                    <Searchbar 
                        placeholderTextColor="green"
                        placeholder="Dropoff Location"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        style={{width:width/1.03}}
                    />

                    
            </View>

            
                
                   

                </View>
           
    )
}

export default LocationSearch