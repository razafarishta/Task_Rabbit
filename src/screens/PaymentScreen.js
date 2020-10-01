import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';




const { height, width, fontScale } = Dimensions.get('window');

const PaymentScreen = ()=>{
    return(
        <View style={{flex:1}}>
            <View style={{
                marginTop:'10%',
                //  backgroundColor:'red',
                  width:width,
                  height:80,
                   paddingLeft:10,
                     }}>
                <Text style={{fontSize:18, fontWeight:'bold'}}>Saved Payment Methods:</Text>
                <View style={{flexDirection:'row', paddingTop:10}}>
                <Fontisto 
                name="apple-pay" 
                size={20} 
                // style={{paddingLeft:10,}}
                />
                     <Text style={{paddingLeft:10,}}>Apple pay</Text>
                </View>

                <View style={{
                    marginTop:'10%',
                  
                }}>
                   <Text style={{ fontSize:18,
                    fontWeight:'bold'}}>Add Payment Method</Text> 

                </View>

                <View style={{width:width, height:30}}>
                    <View style={{flexDirection:'row', padding:10}}>
                        <AntDesign name="creditcard" size={20} />
                <Text style={{fontWeight:'bold', marginLeft:10}}>Credit / Debit Card</Text>
                </View>
                <View style={{flexDirection:'row', paddingTop:10}}>
                    <FontAwesome name='cc-paypal' size={22} />
                    <Text style={{fontWeight:'bold',marginLeft:10}}>PayPal Method</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}
export default PaymentScreen
