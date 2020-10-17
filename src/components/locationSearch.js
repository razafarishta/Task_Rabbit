import React from 'react';
import { Text, View,Dimensions } from 'react-native';
// import { SearchBar } from 'react-native-elements';
// import { SearchBar } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
const { height, width, fontScale } = Dimensions.get('window');
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const LocationSearch =({label})=>{

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return(
        // <View style={{ padding:5, }}>
        //     <View style={{width:width, height:height/4,}}>
        //     <Text style={{fontSize:16, fontWeight:'bold', padding:5, color:'green'}}>
        //     Pickup Location
        //     </Text>
        //     <Searchbar 
        //         placeholder="Pickup Location"
        //         placeholderTextColor="green"
        //         onChangeText={onChangeSearch}
        //         value={searchQuery}
        //         style={{width:width/1.03}}
        //     />

        //         <Text style={{fontWeight:'bold', fontSize:16, padding:5, color:"green"}}>
        //                 Dropoff Location
        //             </Text>
        //             <Searchbar 
        //                 placeholderTextColor="green"
        //                 placeholder="Dropoff Location"
        //                 onChangeText={onChangeSearch}
        //                 value={searchQuery}
        //                 style={{width:width/1.03}}
        //             />

                    
        //     </View>

            
                
                   

        //         </View>
        <View style={{width:width/1.05, alignSelf:'center', padding:'5%', paddingTop:'10%'}}>
          <Text style={{fontWeight:'bold', fontSize:14, color:'green'}}>{label}</Text>
        <GooglePlacesAutocomplete
        placeholder='Search'
        placeholderTextColor="green"
        minLength={2}
        autoFocus={false}
        returnKeyType={'default'}
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key:'AIzaSyCuWQEHgeUkSi10mzD4jny6KG3cyN8f0Vo',
          language: 'en',
        }}
      />
      </View>
           
    )
}

export default LocationSearch