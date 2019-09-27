import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: '21 Years'},
        {name: 'Friend #2', age: '23 Years'},
        {name: 'Friend #3', age: '20 Years'},
        {name: 'Friend #4', age: '28 Years'},
        {name: 'Friend #5', age: '35 Years'},
        {name: 'Friend #6', age: '17 Years'},
        {name: 'Friend #7', age: '21 Years'},
    ]
    return (
    <FlatList
    keyExtractor = {friend => friend.name}
    data={friends} 
    renderItem={({item}) => {
        return <Text style={styles.textStyle}>{item.name}  age:{item.age}</Text>
    }}>

    </FlatList>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical:50
    }
});

export default ListScreen;