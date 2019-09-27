import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetaill from '../components/ImageDetaill';


const ImageScreen = () => {
    return (
        <View>
            <ImageDetaill title="Forest" score="Image score - 10 " imageSource={require('../../assets/forest.jpg')} />
            <ImageDetaill title="Beach" score="Image score - 5 " imageSource={require('../../assets/beach.jpg')}/>
            <ImageDetaill title="Mountain" score="Image score - 9 " imageSource={require('../../assets/mountain.jpg')}/>

        </View>


    )

};

const styles = StyleSheet.create ({});

export default ImageScreen;