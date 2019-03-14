/**
 * @format
 */
import { AppRegistry } from 'react-native';
import React from 'react';
import { View } from 'react-native';
import AlbumList from './src/components/AlbumList';
import Header from './src/components/Header';

const CONSI = () => {
    return (
        <View>
            <Header headerText={"Albums!"} />
            <AlbumList />
        </View>
    );
};

AppRegistry.registerComponent('albums', () => CONSI);
