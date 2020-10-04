import React from 'react';
import { View, Text } from 'react-native';
import { Card, Title, Paragraph,Searchbar } from 'react-native-paper';
import { LogBox } from 'react-native'
// YellowBox.ignoreWarnings([
//     'Require cycle:'
//   ])
LogBox.ignoreAllLogs()

const AddressScreen = ()=>{
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return(
      
<View>
        <Searchbar
      placeholder="Search for Address"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />

        <View style={{paddingTop:10}}>
    <Card style={{}}>
    <Card.Content>
      <Title>Your Address</Title>
      <Paragraph>Address</Paragraph>
    </Card.Content>
  </Card>
  </View>
  </View>
  )
}
export default AddressScreen