import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {

  

  return <View>
   <Text style={styles.text}>Hi there! </Text>
   <Button 
   onPress= {() => navigation.navigate('Components')}
   title="Go to Components Demo"
   />
   <Button 
   onPress= {() => navigation.navigate('List')}
   title="Go to List Demo"
   />
   <Button 
   onPress= {() => navigation.navigate('Images')}
   title="Go to Images Demo"
   />
   <Button 
   onPress= {() => navigation.navigate('Counter')}
   title="Go to Counter Demo"
   />
   </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
